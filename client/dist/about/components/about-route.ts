import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	AboutCmp
} from "../components/about-cmp";

const aboutRoutes:Routes = [
	{
		path: "about",
		component: AboutCmp,
		pathMatch: "full"
	}
]

export const aboutRouting = RouterModule.forRoot(aboutRoutes);
