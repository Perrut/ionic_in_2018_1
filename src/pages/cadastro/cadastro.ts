import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserModel } from '../../models/user.model';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  user: UserModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.user = new UserModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  signUp(): void{
    if(this.user.email === "" ||
      this.user.name === "" ||
      this.user.nick === "" ||
      this.user.password === "" ||
      this.user.password_confirmation === ""){
        this.presentCadastroInvalido();
    } else {
      localStorage.setItem("user", JSON.stringify(this.user));
      this.navCtrl.pop();
    }
  }

  presentCadastroInvalido() {
    let alert = this.alertCtrl.create({
      title: 'Cadastro Inválido',
      message: 'Por favor preencha todos os campos!',
      buttons: ['OK']
    });
    alert.present();
  }
}
