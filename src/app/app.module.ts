import { Pro } from '@ionic/pro';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { SplashPage } from '../pages/splash/splash';
import { PostPage } from '../pages/post/post';
import { CouponsPage } from '../pages/coupons/coupons';
import { InfosPage } from '../pages/infos/infos';
import { PartenairesPage } from '../pages/partenaires/partenaires';
import { SponsorsPage }  from '../pages/sponsors/sponsors';
import { PopupPage } from '../pages/popup/popup';
import { PlayerPage } from '../pages/player/player';


import { ParallaxHeader } from '../components/parallax-header/parallax-header';
import { ContentDrawer } from '../components/content-drawer/content-drawer';
import { ExpandableLayout2Module } from '../components/expandable/layout-2/expandable-layout-2.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { MusicControls } from '@ionic-native/music-controls';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AudioStreamProvider } from '../providers/audio-stream/audio-stream';

import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';
import { SocialSharing } from '@ionic-native/social-sharing';


Pro.init('d159a702', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    CouponsPage,
    InfosPage,
    PartenairesPage,
    SplashPage,
    PostPage,
    ParallaxHeader,
    ContentDrawer,
    SponsorsPage,
      PopupPage,
      PlayerPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ExpandableLayout2Module,
      DirectivesModule,
    ComponentsModule,
      
    IonicModule.forRoot(MyApp, {
        preloadModules: true
    })
  ],
    
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
      CouponsPage,
      InfosPage,
      PartenairesPage,
    SplashPage,
    PostPage,
      SponsorsPage,
      PopupPage,
      PlayerPage
  ],
  providers: [
      MusicControls,
    StatusBar,
    SplashScreen,
      InAppBrowser,
      GoogleAnalytics,
      AudioStreamProvider,
      SocialSharing,
       IonicErrorHandler
  ]
})
export class AppModule {}


