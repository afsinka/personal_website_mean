import * as express from "express";
import {TodoRoutes} from "../api/todo/route/todo-route";
import {ContactRoutes} from "../api/contact/route/contact-route";


export class Routes {
   static init(app: express.Application, router: express.Router) {
     TodoRoutes.init(router);
     ContactRoutes.init(router);


     app.use("/", router);
   }
}
