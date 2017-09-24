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

@Component({
  selector: "navbar-cmp",
  templateUrl: "navbar/templates/navbar.html",
  styleUrls: ["navbar/styles/navbar.css"]
})
export class NavbarCmp {

}
$(document).on('click','.navbar-collapse.show',function(e) {
  $(this).collapse('hide');
});
