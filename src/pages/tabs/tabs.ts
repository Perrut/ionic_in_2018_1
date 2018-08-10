import { NewPostPage } from './../new-post/new-post';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewPostPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
