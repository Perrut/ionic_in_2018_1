import { CadastroPage } from './../cadastro/cadastro';
import { TabsPage } from './../tabs/tabs';
import { SesionsProvider } from './../../providers/sesions/sesions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;
  logado: boolean;

  apiPath = "/api";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sessions: SesionsProvider,
    public http: Http
  ) {
  }

  login() {
    this.sessions.login(this.username, this.password).subscribe(
      (data) => {
        localStorage.setItem("user", JSON.stringify(data.json()));
        localStorage.setItem("logado", "true");
        console.log(data.json());
        this.navCtrl.setRoot(TabsPage);
      },
      (error) => {
        console.log(error.json());
      }
    );
  }

  goToSignUp(): void {
    this.navCtrl.push(CadastroPage);
  }
}
