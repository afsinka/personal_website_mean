import * as express from "express";
import ContactDAO from "../dao/contact-dao";
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

export class ContactController {

  static saveMessage(req: express.Request, res: express.Response): void {
    mailOptions.text = req.body['message'];
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        //console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    });
  }

  static verify(req: express.Request, res: express.Response): void {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    var secretKey = "6LciXjYUAAAAALtyGTHdJOCQcbGQdqekGr9JBp_T";

    //TODO deleteContact
    // req.body['message'] = "asd";

    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" +
      secretKey + "&response=" + req.body['message'] + "&remoteip=" + req.connection.remoteAddress;

    var isSuccess = false;

    request(verificationUrl, function(error, response, body) {
      body = JSON.parse(body);

      this.isSuccess = body.success;

      if (body.success !== undefined && !body.success) {
        return res.status(400).json({ "responseCode": 1, "responseDesc": "Failed captcha verification" });
      }
      res.status(200).json({ "responseCode": 0, "responseDesc": "Success" });

    })

    // let _contact = req.body;
    // ContactDAO
    //   ["verify"](_contact)
    //   .then(contact => res.status(201).json(contact))
    //   .catch(error => res.status(400).json(error));
  }

  static getAll(req: express.Request, res: express.Response): void {
    ContactDAO
    ["getAll"]()
      .then(contacts => res.status(200).json(contacts))
      .catch(error => res.status(400).json(error));
  }

  static getById(req: express.Request, res: express.Response): void {
    ContactDAO
    ["getById"](req.params.id)
      .then(contact => res.status(200).json(contact))
      .catch(error => res.status(400).json(error));
  }

  static createContact(req: express.Request, res: express.Response): void {
    let _contact = req.body;

    ContactDAO
    ["createContact"](_contact)
      .then(contact => res.status(201).json(contact))
      .catch(error => res.status(400).json(error));
  }

  static deleteContact(req: express.Request, res: express.Response): void {
    let _id = req.params.id;

    ContactDAO
    ["deleteContact"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
