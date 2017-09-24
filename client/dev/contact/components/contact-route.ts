import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	ContactCmp
} from "../components/contact-cmp";

const contactRoutes:Routes = [
	{
		path: "contact",
		component: ContactCmp,
		pathMatch: "full"
	}
]

export const contactRouting = RouterModule.forRoot(contactRoutes);
