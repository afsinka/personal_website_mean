"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_service_1 = require("../services/contact-service");
var ContactCmp = /** @class */ (function () {
    function ContactCmp(_contactService) {
        this._contactService = _contactService;
        this.contacts = [];
        this.maxlength = 5000;
        this.characterleft = this.maxlength;
        this.message = '';
    }
    ContactCmp.prototype.ngAfterViewInit = function () {
        twttr.widgets.load();
    };
    ContactCmp.prototype.ngOnInit = function () {
        this._getAll();
    };
    ContactCmp.prototype._getAll = function () {
        var _this = this;
        this._contactService
            .getAll()
            .subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactCmp.prototype.count = function (msg) {
        if (this.maxlength >= msg.length) {
            this.characterleft = (this.maxlength) - (msg.length);
        }
        else {
            this.message = msg.substr(0, msg.length - 1);
        }
    };
    ContactCmp.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.message);
        $('.btn-submit').attr('disabled', true);
        $('#myModal').modal();
        this._contactService
            .getAll()
            .subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    ContactCmp = __decorate([
        core_1.Component({
            selector: "contact-cmp",
            templateUrl: "contact/templates/contact.html",
            styleUrls: ["contact/styles/contact.css"]
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService])
    ], ContactCmp);
    return ContactCmp;
}());
exports.ContactCmp = ContactCmp;
$(document).ready(function () {
});
