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
var core_2 = require("@ngx-translate/core");
var _translate;
var NavbarCmp = /** @class */ (function () {
    function NavbarCmp(translate) {
        this.translate = translate;
        this.levelNum = 'tr';
        _translate = translate;
    }
    NavbarCmp.prototype.ngOnInit = function () {
        $('#turkish').css('display', 'none');
        $('#english').css('display', 'none');
    };
    NavbarCmp.prototype.setlang = function (e) {
        _translate.use(e);
        if (e == 'tr') {
            $('#turkish').parent().addClass('active');
            $('#english').parent().removeClass('active');
        }
        else if (e == 'en') {
            $('#english').parent().addClass('active');
            $('#turkish').parent().removeClass('active');
        }
    };
    NavbarCmp.prototype.setlang2 = function () {
        console.log(this.levelNum);
        _translate.use(this.levelNum);
    };
    NavbarCmp = __decorate([
        core_1.Component({
            selector: "navbar-cmp",
            templateUrl: "navbar/templates/navbar.html",
            styleUrls: ["navbar/styles/navbar.css"]
        }),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], NavbarCmp);
    return NavbarCmp;
}());
exports.NavbarCmp = NavbarCmp;
$(document).on('click', '.navbar-collapse.show', function (e) {
    $(this).collapse('hide');
});
