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
declare var $: any;

@Component({
  selector: "navbar-cmp",
  templateUrl: "navbar/templates/navbar.html",
  styleUrls: ["navbar/styles/navbar.css"]
})
export class NavbarCmp {

  ngOnInit() {
    $('#turkish').css('display', 'none');
    $('#english').css('display', 'none');
  }

  constructor(private translate: TranslateService) {
    _translate = translate;
  }

  setlang(e: string): void {
    _translate.use(e);

    if (e == 'tr') {
      $('#turkish').parent().addClass('active');
      $('#english').parent().removeClass('active');
    } else if(e == 'en') {
      $('#english').parent().addClass('active');
      $('#turkish').parent().removeClass('active');
    }
  }

 levelNum:string = 'tr';
 setlang2(){
   console.log(this.levelNum);
   _translate.use(this.levelNum);
 }

}
$(document).on('click', '.navbar-collapse.show', function(e) {
  $(this).collapse('hide');
});
