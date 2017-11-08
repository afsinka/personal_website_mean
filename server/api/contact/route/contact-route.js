"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_controller_1 = require("../controller/contact-controller");
var ContactRoutes = /** @class */ (function () {
    function ContactRoutes() {
    }
    ContactRoutes.init = function (router) {
        router
            .route("/api/contacts")
            .get(contact_controller_1.ContactController.getAll)
            .post(contact_controller_1.ContactController.createContact);
        router
            .route("/api/contacts/:id")
            .delete(contact_controller_1.ContactController.deleteContact);
    };
    return ContactRoutes;
}());
exports.ContactRoutes = ContactRoutes;
