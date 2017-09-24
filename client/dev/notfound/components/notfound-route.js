"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var notfound_cmp_1 = require("../components/notfound-cmp");
var notfoundRoutes = [
    { path: '404', component: notfound_cmp_1.NotFoundCmp },
    { path: '**', redirectTo: '/404' }
];
exports.notfoundRouting = router_1.RouterModule.forRoot(notfoundRoutes);
