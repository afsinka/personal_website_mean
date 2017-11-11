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
  verifyMessage = '';

  count(msg) {
    if (this.maxlength >= msg.length) {
      this.characterleft = (this.maxlength) - (msg.length);
    } else {
      this.message = msg.substr(0, msg.length - 1);
    }
  }

  onSubmit() {
    var resp = this._contactService
      .saveMessage(this.message, this.verifyMessage)
      .subscribe(data => {
        $('.btn-submit').attr('disabled', true);
        $('#myModal').modal();
      },
      err => {
        console.error(err);
        var response = JSON.parse(err['_body']);
        if (response.responseCode == "1") {
          $('#myModal2').modal();
        }
      }
      );
  }

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  handleCorrectCaptcha($event) {
    this.verifyMessage = $event;
  }
}

$(document).ready(function() {

});
