import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import contactSchema from "../model/contact-model";

contactSchema.static("verify", (contact:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      console.log(contact);
    });
});

contactSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Contact.find(_query)
            .exec((err, contacts) => {
              err ? reject(err)
                  : resolve(contacts);
            });
    });
});

contactSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Contact is not a valid object."));
        }

        Contact.findById(id)
            .exec((err, contact) => {
              err ? reject(err)
                  : resolve(contact);
            });
    });
});

contactSchema.static("createContact", (contact:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(contact)) {
        return reject(new TypeError("Contact is not a valid object."));
      }

      var _contact = new Contact(contact);

      _contact.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

contactSchema.static("deleteContact", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Contact.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Contact = mongoose.model("Contact", contactSchema);

export default Contact;
