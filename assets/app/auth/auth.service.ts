import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { User } from "./user";

@Injectable()
export class AuthService{
  constructor (private _http: Http) {}

  signup(user){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log("auth service: "+body);
    return this._http.post('/user', body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  signin(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    console.log("signin service: "+body);
    return this._http.post('/user/login', body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
