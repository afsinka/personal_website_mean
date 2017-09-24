"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var contact_cmp_1 = require("../components/contact-cmp");
var contactRoutes = [
    {
        path: "contact",
        component: contact_cmp_1.ContactCmp,
        pathMatch: "full"
    }
];
exports.contactRouting = router_1.RouterModule.forRoot(contactRoutes);
