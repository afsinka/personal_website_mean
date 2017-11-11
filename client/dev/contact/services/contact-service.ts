import {
  Inject,
  Injectable
} from "@angular/core";

import {
  Observable
} from "rxjs/Observable";

import {
  Http,
  Headers
} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class ContactService {
  static ENDPOINT: string = "/api/contacts/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  verify(message: string): Observable<any> {
    let _messageStringified = JSON.stringify({message:message});

    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    return this._http
               .post("/api/contacts/verify", _messageStringified, {headers})
               .map((r) => r.json());
  }

  saveMessage(message: string): Observable<any> {
    let _messageStringified = JSON.stringify({message:message});

    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    return this._http
               .post("/api/contacts/saveMessage", _messageStringified, {headers})
               .map((r) => r.json());
  }


  getAll(): Observable<any> {
    return this._http
               .get(ContactService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(ContactService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }


}
