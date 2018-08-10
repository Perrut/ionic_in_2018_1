import { FeedPage } from './../feed/feed';
import { NewPostPage } from './../new-post/new-post';
import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewPostPage;
  tab2Root = FeedPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
