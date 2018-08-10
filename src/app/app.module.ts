import { CadastroPageModule } from './../pages/cadastro/cadastro.module';
import { LoginPageModule } from './../pages/login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { SesionsProvider } from '../providers/sesions/sesions';
import { UsersProvider } from '../providers/users/users';

import { PerfilPageModule } from './../pages/perfil/perfil.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    CadastroPageModule,
    HttpModule,
    PerfilPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SesionsProvider,
    UsersProvider
  ]
})
export class AppModule {}
