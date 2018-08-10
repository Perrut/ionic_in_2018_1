import { PostsProvider } from './../../providers/posts/posts';
import { SesionsProvider } from './../../providers/sesions/sesions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { PostModel } from '../../models/post.model';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  post: PostModel;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sessions: SesionsProvider,
    public posts: PostsProvider,
    public app: App) {
    this.post = new PostModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  postar(){
    if(this.post.text === "" ||
      this.post.image_url === ""){
        this.presentPostInvalido();
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      this.post.user_id = user.id;
      //debugger;
      this.posts.postar(this.post, user.authentication_token).subscribe(
        (data) => {
          console.log(data.json());
        },
        (error) => {
          console.log(error.json());
        }
      );
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

  logout(): void{
    this.sessions.logout();
    this.app.getRootNav().push(LoginPage);
  }
}
