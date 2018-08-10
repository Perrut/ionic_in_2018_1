import { PostModel } from './../../models/post.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PostsProvider {

  apiUrl = "/api";

  constructor(public http: Http) {
  }

  postar(post: PostModel, token: string) {
    return this.http.post(`${this.apiUrl}/posts`,
      { post: post, authentication_token: token });
  }

  getPosts(token: string, page: string) {
    return this.http.get(`${this.apiUrl}/posts?authentication_token=${token}&page=${page}`);
  }
}
