import { NgModule } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { App } from "./app";
import { TodoCmp } from "./todo/components/todo-cmp";
import { todoRouting } from "./todo/components/todo-route";
import { TodoService } from "./todo/services/todo-service";
import { NavbarCmp } from "./navbar/components/navbar-cmp";
import { AboutCmp } from "./about/components/about-cmp";
import { aboutRouting } from "./about/components/about-route";
import { ContactCmp } from "./contact/components/contact-cmp";
import { contactRouting } from "./contact/components/contact-route";
import { ContactService } from "./contact/services/contact-service";
import { NotFoundCmp } from "./notfound/components/notfound-cmp";
import { notfoundRouting } from "./notfound/components/notfound-route";
import { ReCaptchaModule } from 'angular2-recaptcha';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(httpClient: Http) {
  return new TranslateHttpLoader(httpClient, "i18n/", ".json");
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    todoRouting,
    aboutRouting,
    contactRouting,
    notfoundRouting,
    ReCaptchaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    App,
    TodoCmp,
    NavbarCmp,
    AboutCmp,
    ContactCmp,
    NotFoundCmp,
  ],
  providers: [
    TodoService,
    ContactService,
  ],
  bootstrap: [
    App,
  ],
})
export class AppModule { }
