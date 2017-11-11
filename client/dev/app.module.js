"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_1 = require("./app");
var todo_cmp_1 = require("./todo/components/todo-cmp");
var todo_route_1 = require("./todo/components/todo-route");
var todo_service_1 = require("./todo/services/todo-service");
var navbar_cmp_1 = require("./navbar/components/navbar-cmp");
var about_cmp_1 = require("./about/components/about-cmp");
var about_route_1 = require("./about/components/about-route");
var contact_cmp_1 = require("./contact/components/contact-cmp");
var contact_route_1 = require("./contact/components/contact-route");
var contact_service_1 = require("./contact/services/contact-service");
var notfound_cmp_1 = require("./notfound/components/notfound-cmp");
var notfound_route_1 = require("./notfound/components/notfound-route");
var angular2_recaptcha_1 = require("angular2-recaptcha");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                todo_route_1.todoRouting,
                about_route_1.aboutRouting,
                contact_route_1.contactRouting,
                notfound_route_1.notfoundRouting,
                angular2_recaptcha_1.ReCaptchaModule,
            ],
            declarations: [
                app_1.App,
                todo_cmp_1.TodoCmp,
                navbar_cmp_1.NavbarCmp,
                about_cmp_1.AboutCmp,
                contact_cmp_1.ContactCmp,
                notfound_cmp_1.NotFoundCmp,
            ],
            providers: [
                todo_service_1.TodoService,
                contact_service_1.ContactService,
            ],
            bootstrap: [
                app_1.App,
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
