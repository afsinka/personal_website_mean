import * as express from "express";
import ContactDAO from "../dao/contact-dao";

export class ContactController {

  static verify(req: express.Request, res: express.Response): void {
      console.log(req.body);
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

  static getById(req: express.Request, res: express.Response):void {
      ContactDAO
        ["getById"](req.params.id)
        .then(contact => res.status(200).json(contact))
        .catch(error => res.status(400).json(error));
  }

  static createContact(req: express.Request, res: express.Response):void {
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
