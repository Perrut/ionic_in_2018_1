import { PostModel } from './../../models/post.model';
import { PostsProvider } from './../../providers/posts/posts';
import { SesionsProvider } from './../../providers/sesions/sesions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  publicacoes: PostModel[] = [];
  page: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sessions: SesionsProvider,
    public posts: PostsProvider,
    public app: App,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  ionViewWillEnter() {
    this.getPosts();
  }

  doRefresh(refresher) {
    this.page = 1;

    let user = JSON.parse(localStorage.getItem("user"));
    this.posts.getPosts(user.authentication_token, this.page.toString()).subscribe(
      (data) => {
        this.publicacoes = data.json().posts;
        refresher.complete()
      }, (error) => {
        console.log(error.json());
        refresher.complete();
      }
    );
  }

  doInfinite(infiniteScroll) {
    this.page += 1;
    let user = JSON.parse(localStorage.getItem("user"));
    this.posts.getPosts(user.authentication_token, this.page.toString()).subscribe(
      (data) => {
        this.publicacoes = this.publicacoes.concat(data.json().posts);
        console.log(data.json().posts);
        console.log(this.publicacoes);
        infiniteScroll.complete();
      }, (error) => {
        console.log(error.json());
        infiniteScroll.complete();
      }
    );
  }

  getPosts(page?: number) {
    const loader = this.loadingCtrl.create({
      content: "Marca ae..."
    });
    loader.present();
    let user = JSON.parse(localStorage.getItem("user"));
    if (page) {
      this.page = page;
    }
    this.posts.getPosts(user.authentication_token, this.page.toString()).subscribe(
      (data) => {
        //console.log(data.json());
        this.publicacoes = data.json().posts;
        loader.dismiss();
      }, (error) => {
        console.log(error.json());
        loader.dismiss();
      }
    );
  }

  logout(): void {
    this.sessions.logout();
    this.app.getRootNav().push(LoginPage);
  }
}
