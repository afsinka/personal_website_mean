import {
  Component,
  OnInit
} from "@angular/core";

declare var $: any;

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import { TranslateService } from '@ngx-translate/core';

var _translate;

@Component({
  selector: "navbar-cmp",
  templateUrl: "navbar/templates/navbar.html",
  styleUrls: ["navbar/styles/navbar.css"]
})
export class NavbarCmp {

  constructor(private translate: TranslateService) {
    _translate = translate;
  }

  setlang(e: string): void {
    _translate.use(e);
  }

}
$(document).on('click', '.navbar-collapse.show', function(e) {
  $(this).collapse('hide');
});
