import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PostModel } from '../../models/post.model';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  post: PostModel;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.post = new PostModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  postar(){
    if(this.post.text === "" ||
      this.post.image_url === ""){
        this.presentPostInvalido();
    }
  }

  presentPostInvalido() {
    let alert = this.alertCtrl.create({
      title: 'Post Inválido!',
      message: 'Por favor preencha todos os campos!',
      buttons: ['OK']
    });
    alert.present();
  }
}
