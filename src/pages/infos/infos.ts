import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { PopupPage } from '../popup/popup';
            import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {
          data: any = {};
    title: string;
    text: string;
   
    params: any = {};

  constructor(private ga: GoogleAnalytics,public navCtrl: NavController, public navParams: NavParams,public http: Http, public loadingCtrl: LoadingController) {
      
      
      this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('Informations');
          this.ga.trackEvent('Navigation', 'Informations');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
      
      
       let loader = this.loadingCtrl.create({
      content: "Chargement..."
    });
    loader.present();
      
      
      let path = 'https://www.glissenville.ch/wp-json/wp/v2/applications?app_type_contenu=11&per_page=20';
					let encodedPath = encodeURI(path);
					let timeoutMS = 10000;

					this.http.get(encodedPath)
						.timeout(timeoutMS)
						.map(res => res.json()).subscribe(data => {
							
                            loader.dismiss();
                         let responseData = data;
                            console.log(responseData);
                        setTimeout(() => {
                        							this.params.data = data;
                        },500);
                        
                        
						},
						err => {
						  loader.dismiss();	
                            console.log('error in ETPhoneHome');
						});
    
   this.params.events = {
        'onItemClick': function(item: any) {
            console.log("onItemClick");
        },
        'onExplore': function(item: any) {
           console.log("onExplore");
        },
        'onShare': function(item: any) {
            console.log("onShare");
        },
        'onLike': function(item: any) {
            console.log("onLike");
        },
        'onFavorite': function(item: any) {
            console.log("onFavorite");
        },
    };

      
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewsPage');
    }
    
     private showInfos(title, text){
        //console.log(this.login);
        this.navCtrl.push(PopupPage,{
            title: title,
            text: text,
        });
    }

}
