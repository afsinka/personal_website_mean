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
}

$(document).ready(function() {

});
