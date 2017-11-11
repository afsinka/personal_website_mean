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
    console.log(this.message);
    $('.btn-submit').attr('disabled', true);
    $('#myModal').modal();

    var resp = this._contactService
      .verify(this.message)
      .subscribe((m) => {
        this.contacts.push(m);
      });

  }
}

$(document).ready(function() {

});
