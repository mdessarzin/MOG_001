import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the SponsorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

   text: string;
    params: any = {};
    
  constructor(private ga: GoogleAnalytics, public navCtrl: NavController, public navParams: NavParams,public http: Http, public loadingCtrl: LoadingController, private sanitizer: DomSanitizer) {
      
      this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('partenaires');
          this.ga.trackEvent('Navigation', 'Partenaires');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
      
      let loader = this.loadingCtrl.create({
      content: "Chargement..."
    });
    loader.present();
      
      
      let path = 'https://www.glissenville.ch/wp-json/wp/v2/applications?app_type_contenu=8&per_page=20';
					let encodedPath = encodeURI(path);
					let timeoutMS = 10000;

					this.http.get(encodedPath)
						.timeout(timeoutMS)
						.map(res => res.json()).subscribe(data => {
							let responseData = data;
							console.log(responseData);
                            this.params.data = data;
                            loader.dismiss();

						},
						err => {
						  loader.dismiss();	
                            console.log('error in ETPhoneHome');
						});
      
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewsPage');
    }
    
}