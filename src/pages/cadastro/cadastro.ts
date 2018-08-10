import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserModel } from '../../models/user.model';

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
    public alertCtrl: AlertController,
    public userService: UsersProvider) {
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
      this.userService.create(this.user).subscribe(
        (data) => {
          console.log(data.json());
        }, (error) => {
          console.log(error.json());
        }
      );
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
