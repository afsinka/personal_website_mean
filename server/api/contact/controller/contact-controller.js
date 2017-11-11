"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var contact_dao_1 = require("../dao/contact-dao");
var bodyParser = require('body-parser');
var request = require('request');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'afsinkapersonalwebsite@hotmail.com',
        pass: 'Zx=QU$=k,5rk'
    }
});
var mailOptions = {
    from: 'afsinkapersonalwebsite@hotmail.com',
    to: 'afsinka@hotmail.com',
    subject: 'You have a new anonymous message!',
    text: 'That was easy!'
};
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.saveMessage = function (req, res) {
        mailOptions.text = req.body['message'];
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    };
    ContactController.verify = function (req, res) {
        var app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        var secretKey = "6LciXjYUAAAAALtyGTHdJOCQcbGQdqekGr9JBp_T";
        //TODO deleteContact
        // req.body['message'] = "asd";
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" +
            secretKey + "&response=" + req.body['message'] + "&remoteip=" + req.connection.remoteAddress;
        var isSuccess = false;
        request(verificationUrl, function (error, response, body) {
            body = JSON.parse(body);
            this.isSuccess = body.success;
            if (body.success !== undefined && !body.success) {
                return res.status(400).json({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
            }
            res.status(200).json({ "responseCode": 0, "responseDesc": "Success" });
        });
        // let _contact = req.body;
        // ContactDAO
        //   ["verify"](_contact)
        //   .then(contact => res.status(201).json(contact))
        //   .catch(error => res.status(400).json(error));
    };
    ContactController.getAll = function (req, res) {
        contact_dao_1.default["getAll"]()
            .then(function (contacts) { return res.status(200).json(contacts); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ContactController.getById = function (req, res) {
        contact_dao_1.default["getById"](req.params.id)
            .then(function (contact) { return res.status(200).json(contact); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ContactController.createContact = function (req, res) {
        var _contact = req.body;
        contact_dao_1.default["createContact"](_contact)
            .then(function (contact) { return res.status(201).json(contact); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    ContactController.deleteContact = function (req, res) {
        var _id = req.params.id;
        contact_dao_1.default["deleteContact"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return ContactController;
}());
exports.ContactController = ContactController;
