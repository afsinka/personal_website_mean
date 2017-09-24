import {
	Component
} from "@angular/core";

@Component({
	selector: "app",
	template: `
		<navbar-cmp></navbar-cmp>
		<br/><br/>
		<router-outlet></router-outlet>
	`
})
export class App {

}
