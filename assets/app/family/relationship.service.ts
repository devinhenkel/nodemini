import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RelationshipService {
    members = [];
    constructor (private _http: Http) {}

    getAll() {
      return this._http.get('/familyapi/cousins/Ellie')
        .map(response => {
          //console.log("service: "+response._body);
          const data = response.json();
          let members: any[] = data;

          return members;
        })
        .catch(error => Observable.throw(error));
    }
}
