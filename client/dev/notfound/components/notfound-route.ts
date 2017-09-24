import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	NotFoundCmp
} from "../components/notfound-cmp";

const notfoundRoutes:Routes = [
	{path: '404', component: NotFoundCmp},
  {path: '**', redirectTo: '/404'}
]

export const notfoundRouting = RouterModule.forRoot(notfoundRoutes);
