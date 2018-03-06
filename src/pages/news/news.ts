import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, LoadingController, Navbar } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { concatMap } from 'rxjs/operators/concatMap';
import { delay } from 'rxjs/operators/delay';
import { DirectivesModule } from '../../directives/directives.module';
import { ComponentsModule } from '../../components/components.module';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PostPage } from '../post/post';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
   public cards = [];
  private hasLoaded = false;
  params: any = {};
    title: string;
    image: string;
    text: string;
    date: string;
    cat: string;
link: string;

  constructor(private ga: GoogleAnalytics, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public http: Http, private socialSharing: SocialSharing) {

      this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('news');
          this.ga.trackEvent('Navigation', 'Actualité');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      

    let path = 'https://www.glissenville.ch/wp-json/wp/v2/applications?app_type_contenu=5&per_page=20';
    let encodedPath = encodeURI(path);
    let timeoutMS = 10000;

    this.http.get(encodedPath)
        .timeout(timeoutMS)
        .map(res => res.json()).subscribe(data => {

         let responseData = data;
            console.log(responseData);
        setTimeout(() => {
            this.cards = data;
            this.params = 'http://www.glissenville.ch/wp-content/uploads/2018/03/avatar.png';

        },500);


        },
        err => {
            console.log('error in ETPhoneHome');
        });
      
      
    // the "actual" data, retrieved from e.g. an API
    // create an observable...
    Observable
      // from an array of elements
      .from([])
      // apply the ...
      .pipe(
      // concatMap (map the values from the Array into an inner Observable)
      concatMap((obj: Object) => {
        // returning each value from the Array, delayed by 1.5 seconds
        return Observable
          .of(obj)
          .pipe(
           delay(1500)
          );
      })
      )
      // subscribe to the Observable and push each value
      // into the cards Array.
      .subscribe((card) => {

        this.cards.push(card);

        // we received data, start fading out the 
        // skeleton cards
        this.hasLoaded = true;

      });

  }


private whatsappShare(title, image, link){
    this.socialSharing.shareViaWhatsApp(title, image, link)
      .then(()=>{
//
    },
      ()=>{
         //
      })
  }


private facebookShare(title, image, link){
    this.socialSharing.shareViaFacebook(title, null, link)
      .then(()=>{
       //
      },
      ()=>{
         //
      })
  }

private Share(message, title, image, link){
    this.socialSharing.share(message, title, null, link)
      .then(()=>{
       //
      },
      ()=>{
         //
      })
  }

private showDetails(title,image, text, date, link){
        //console.log(this.login);
       
    
    this.navCtrl.push(PostPage,{
            title: title,
            text: text,
            image: image,
            date: date,
            link: link,
            cat: 'Actualité'
        });
    }

}