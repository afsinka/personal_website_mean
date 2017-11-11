"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var contact_model_1 = require("../model/contact-model");
contact_model_1.default.static("verify", function (contact) {
    return new Promise(function (resolve, reject) {
        console.log(contact);
    });
});
contact_model_1.default.static("getAll", function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Contact.find(_query)
            .exec(function (err, contacts) {
            err ? reject(err)
                : resolve(contacts);
        });
    });
});
contact_model_1.default.static("getById", function (id) {
    return new Promise(function (resolve, reject) {
        if (!id) {
            return reject(new TypeError("Contact is not a valid object."));
        }
        Contact.findById(id)
            .exec(function (err, contact) {
            err ? reject(err)
                : resolve(contact);
        });
    });
});
contact_model_1.default.static("createContact", function (contact) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(contact)) {
            return reject(new TypeError("Contact is not a valid object."));
        }
        var _contact = new Contact(contact);
        _contact.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
contact_model_1.default.static("deleteContact", function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }
        Contact.findByIdAndRemove(id)
            .exec(function (err, deleted) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Contact = mongoose.model("Contact", contact_model_1.default);
exports.default = Contact;
