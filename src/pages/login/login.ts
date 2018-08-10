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
    /* if (this.sessions.login(this.username, this.password)){
      this.navCtrl.setRoot(TabsPage);
    } else {
      console.log("Usuário e senha incorretos");
    } */
    console.log("carregando");
    
    this.http.get(this.apiPath + "/posts").subscribe((data) => {
      console.log(data.json());

    },
      () => {
        console.log("não foi");

      });

      console.log("carregou");
  }

  goToSignUp(): void {
    this.navCtrl.push(CadastroPage);
  }
}
