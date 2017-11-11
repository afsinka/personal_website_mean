import {
  Component,
  OnInit,
  AfterViewInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import {
  ContactService
} from "../services/contact-service";

import { ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';

declare var $: any;
declare var twttr;

@Component({
  selector: "contact-cmp",
  templateUrl: "contact/templates/contact.html",
  styleUrls: ["contact/styles/contact.css"]
})
export class ContactCmp implements AfterViewInit {
  ngAfterViewInit() {
    twttr.widgets.load();
  }

  constructor(private _contactService: ContactService) {

  }

  ngOnInit() {

  }

  contacts: string[] = [];

  maxlength = 5000;
  characterleft = this.maxlength;
  message = '';

  count(msg) {
    if (this.maxlength >= msg.length) {
      this.characterleft = (this.maxlength) - (msg.length);
    } else {
      this.message = msg.substr(0, msg.length - 1);
    }
  }

  onSubmit() {
    if (this.contacts.length > 0) {
      let responseCode = this.contacts[0]['responseCode'];
      if (responseCode == "0") {
        console.log("Oh thank god, you are not a robot!");
        $('.btn-submit').attr('disabled', true);
        $('#myModal').modal();
        var resp = this._contactService
          .saveMessage(this.message)
          .subscribe((m) => {

          });
      }
    } else {
      console.log("Hello Mr.Robot!!!");
      $('#myModal2').modal();
    }
  }

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  handleCorrectCaptcha($event) {
    var resp = this._contactService
      .verify($event)
      .subscribe((m) => {
        this.contacts.push(m);
      });
  }
}

$(document).ready(function() {

});
