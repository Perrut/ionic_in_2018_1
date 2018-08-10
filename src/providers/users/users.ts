import { UserModel } from './../../models/user.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersProvider {

  apiUrl = "/api";

  constructor(public http: Http) {
    
  }

  create(user: UserModel){
    return this.http.post(`${this.apiUrl}/users`, { user: user });
  }
}
