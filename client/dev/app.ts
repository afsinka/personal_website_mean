import {
  Component
} from "@angular/core";

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app",
  template: `
		<navbar-cmp></navbar-cmp>
		<br/><br/>
		<router-outlet></router-outlet>
	`
})
export class App {
  constructor(private translate: TranslateService) {

    translate.addLangs(["en", "tr"]);
    translate.setDefaultLang('tr');
  }

  // let browserLang = translate.getBrowserLang();
  // translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
}
