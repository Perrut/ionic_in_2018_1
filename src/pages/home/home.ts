import { LoginPage } from './../login/login';
import { SesionsProvider } from './../../providers/sesions/sesions';
import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userName: string = "";

  constructor(
    public navCtrl: NavController, 
    public sessions: SesionsProvider,
    public app: App) {

  }

  ionViewWillEnter(){
    let user = localStorage.getItem("user");
    this.userName = JSON.parse(user).name;
  }

  logout(): void{
    this.sessions.logout();
    this.app.getRootNav().push(LoginPage);
  }
}
