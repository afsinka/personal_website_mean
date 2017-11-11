"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_controller_1 = require("../controller/contact-controller");
var ContactRoutes = /** @class */ (function () {
    function ContactRoutes() {
    }
    ContactRoutes.init = function (router) {
        router
            .route("/api/contacts/verify")
            .post(contact_controller_1.ContactController.verify);
        // router
        //   .route("/api/contacts")
        //   .get(ContactController.getAll)
        //   .post(ContactController.createContact);
        //
        // router
        //   .route("/api/contacts/:id")
        //   .delete(ContactController.deleteContact);
    };
    return ContactRoutes;
}());
exports.ContactRoutes = ContactRoutes;
