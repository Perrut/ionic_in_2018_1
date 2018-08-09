import { Injectable } from '@angular/core';

/*
  Generated class for the SesionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SesionsProvider {

  username = "teste@email.com";
  password = "123456";

  constructor() {
  }

  login(username: string, password: string): boolean{
    if (username === this.username && password === this.password){
      localStorage.setItem("logado", "true");
      return true;
    } else {
      return false;
    }
  }

  logout(): void{
    localStorage.removeItem("logado");
  }
}
