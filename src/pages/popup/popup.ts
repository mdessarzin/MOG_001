import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
                  import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class PopupPage {
    
    title: string;
    text: any;

  constructor(private ga: GoogleAnalytics,public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {

      this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('Informations');
          this.ga.trackEvent('Navigation', 'Informations', navParams.get('title'));
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
      
    this.title = navParams.get('title');      
    this.text = sanitizer.bypassSecurityTrustHtml(navParams.get('text'));
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }

}
