"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_route_1 = require("../api/todo/route/todo-route");
var contact_route_1 = require("../api/contact/route/contact-route");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        contact_route_1.ContactRoutes.init(router);
        app.use("/", router);
    };
    return Routes;
}());
exports.Routes = Routes;
