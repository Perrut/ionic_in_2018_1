import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SesionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SesionsProvider {

  apiUrl = "/api";

  constructor(public http: Http) {
  }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email: username, password: password });
  }

  logout(): void {
    localStorage.removeItem("logado");
  }
}
