import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule  } from "@angular/platform-browser";
import { App }   from "./app";
import { TodoCmp }   from "./todo/components/todo-cmp";
import { todoRouting } from "./todo/components/todo-route";
import { TodoService }   from "./todo/services/todo-service";
import { NavbarCmp} from "./navbar/components/navbar-cmp";
import { AboutCmp} from "./about/components/about-cmp";
import { aboutRouting} from "./about/components/about-route";
import { ContactCmp} from "./contact/components/contact-cmp";
import { contactRouting} from "./contact/components/contact-route";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      todoRouting,
      aboutRouting,
      contactRouting,
    ],
    declarations: [
      App,
      TodoCmp,
      NavbarCmp,
      AboutCmp,
      ContactCmp,
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
