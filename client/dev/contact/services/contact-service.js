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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ContactService = /** @class */ (function () {
    function ContactService(_http) {
        this._http = _http;
    }
    ContactService_1 = ContactService;
    // verify(message: string): Observable<any> {
    //   let _messageStringified = JSON.stringify({message:message});
    //
    //   let headers = new Headers();
    //
    //   headers.append("Content-Type", "application/json");
    //
    //   return this._http
    //              .post("/api/contacts/verify", _messageStringified, {headers})
    //              .map((r) => r.json());
    // }
    ContactService.prototype.saveMessage = function (message, verifyMessage) {
        var _messageStringified = JSON.stringify({ message: message, verifyMessage: verifyMessage });
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this._http
            .post("/api/contacts/saveMessage", _messageStringified, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    ContactService.prototype.getAll = function () {
        return this._http
            .get(ContactService_1.ENDPOINT.replace(/:id/, ""))
            .map(function (r) { return r.json(); });
    };
    ContactService.prototype.getById = function (id) {
        return this._http
            .get(ContactService_1.ENDPOINT.replace(/:id/, id))
            .map(function (r) { return r.json(); });
    };
    ContactService.ENDPOINT = "/api/contacts/:id";
    ContactService = ContactService_1 = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [http_1.Http])
    ], ContactService);
    return ContactService;
    var ContactService_1;
}());
exports.ContactService = ContactService;
