"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_dao_1 = require("../dao/contact-dao");
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.verify = function (req, res) {
        console.log(req.body);
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
