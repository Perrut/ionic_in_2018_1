import { PostsProvider } from './../../providers/posts/posts';
import { SesionsProvider } from './../../providers/sesions/sesions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { PostModel } from '../../models/post.model';
import { LoginPage } from '../login/login';
import { Geolocation } from '@ionic-native/geolocation';

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
    public app: App,
    public geolocation: Geolocation) {
    this.post = new PostModel();
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      // resp.coords.latitude
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
    console.log('ionViewDidLoad NewPostPage');
  }

  postar() {
    if (this.post.text === "" ||
      this.post.image_url === "") {
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

  logout(): void {
    this.sessions.logout();
    this.app.getRootNav().push(LoginPage);
  }
}
