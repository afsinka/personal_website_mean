"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_cmp_1 = require("../components/about-cmp");
var aboutRoutes = [
    {
        path: "about",
        component: about_cmp_1.AboutCmp,
        pathMatch: "full"
    }
];
exports.aboutRouting = router_1.RouterModule.forRoot(aboutRoutes);
