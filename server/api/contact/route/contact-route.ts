"use strict";

import * as express from "express";
import {ContactController} from "../controller/contact-controller";

export class ContactRoutes {
    static init(router: express.Router) {
      router
        .route("/api/contacts")
        .get(ContactController.getAll)
        .post(ContactController.createContact);

      router
        .route("/api/contacts/:id")
        .delete(ContactController.deleteContact);
    }
}
