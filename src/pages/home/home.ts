import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, LoadingController} from 'ionic-angular';
import { NewsPage } from '../news/news';
import { StatusBar } from '@ionic-native/status-bar';
import { MusicControls } from '@ionic-native/music-controls';
import { Http } from '@angular/http';
import * as $ from "jquery";

import { InfosPage } from '../infos/infos';
import { SponsorsPage } from '../sponsors/sponsors';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AudioStreamProvider } from '../../providers/audio-stream/audio-stream';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
private loadingPopup: any;
    title: string;
    image: string;
    text: string;
    date: string;
    cat: string;
    live: string;
    animateClass: any;
    params: any = {};
    data: any = {};
    pushPage: any;
    buttonIcon: string = 'ios-play';

  constructor(
      public navCtrl: NavController,
      public statusBar: StatusBar,
      private _musicControls: MusicControls,
      public _player: AudioStreamProvider,
      public http: Http, 
      public loadingCtrl: LoadingController,
      private iab: InAppBrowser,
      private _PLATFORM : Platform,
      private ga: GoogleAnalytics
  ) {
      
     
this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('home');
        this.ga.trackEvent('Navigation', 'Home');

      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
      if(localStorage.player == 'play'){
            this.buttonIcon = "ios-pause";

        }
        else
        {
            this.buttonIcon = "ios-play";

        }
      
      
            $.ajaxSetup({ cache: false });
            $.getJSON('https://www.mediaone-digital.ch/cache/onefm.json', function(data){
                        //data.live[0].playtime){	

                
                       $('#songTitle').html(data.live[0].interpret+'<br>'+data.live[0].title);
                       $('#songCover').attr('src',data.live[0].imageURL);
            });
      
            
      
      
        let path = 'https://www.glissenville.ch/wp-json/wp/v2/applications?app_type_contenu=5&per_page=20';
        let encodedPath = encodeURI(path);
        let timeoutMS = 10000;

        this.http.get(encodedPath)
            .timeout(timeoutMS)
            .map(res => res.json()).subscribe(data => {

                let responseData = data;
                console.log(responseData);
                setTimeout(() => {
                    this.params.data = data;
                },500);


            },
            err => {
                console.log('error in ETPhoneHome');
            });
      

    
      
    
     this.data = {
            "items": [
                {
                    "id": 1,
                    "title": "Actu",
                    "backgroundImage": "assets/img/1.jpg"
                },
                {
                    "id": 2,
                    "title": "Tes rabais",
                    "backgroundImage": "assets/img/2.jpg"
                },
                {
                    "id": 3,
                    "title": "Infos pratiques",
                    "backgroundImage": "assets/img/3.jpg"
                },
                {
                    "id": 4,
                    "title": "Les partenaires",
                    "backgroundImage": "assets/img/4.jpg"
                }
            ]
        };
      
      
  }





 startMusicControls(artiste,titre, cover){
    this._musicControls.destroy(); // it's the same with or without the destroy 
    this._musicControls.create({
      track       : titre,        // optional, default : ''
      artist      : artiste,                       // optional, default : ''
      cover       : cover,      // optional, default : nothing
      // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
      //           or a remote url ('http://...', 'https://...', 'ftp://...')
      isPlaying   : true,                         // optional, default : true
      dismissable : true,                         // optional, default : false
    
      // hide previous/next/close buttons:
      hasPrev   : false,      // show previous button, optional, default: true
      hasNext   : false,      // show next button, optional, default: true
      hasClose  : false,       // show close button, optional, default: false
      hasSkipForward : false,  // show skip forward button, optional, default: false
      hasSkipBackward : false, // show skip backward button, optional, default: false
      skipForwardInterval: 0, // display number for skip forward, optional, default: 0
      skipBackwardInterval: 0, // display number for skip backward, optional, default: 0
    // iOS only, optional
      album       : 'One FM',     // optional, default: ''
      duration : 0, // optional, default: 0
      elapsed : 0, // optional, default: 0
    
      // Android only, optional
      // text displayed in the status bar when the notific\ation (and the ticker) are updated
      ticker    : 'En ce moment'
     });
     this._musicControls.subscribe().subscribe((action) => {
      console.log('action', action);
          const message = JSON.parse(action).message;
          console.log('message', message);
          switch(message) {
            case 'music-controls-next':
               // Do something
               break;
            case 'music-controls-previous':
               // Do something
               break;
            case 'music-controls-pause':
               // Do something
               console.log('music pause');
               this._player.pauseProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(false);
               break;
            case 'music-controls-play':
               // Do something
               console.log('music play');
               
               this._player.playProvider();
               this._musicControls.listen(); 
               this._musicControls.updateIsPlaying(true);
               break;
            case 'music-controls-destroy':
               // Do something
               break;
            // External controls (iOS only)
            case 'music-controls-toggle-play-pause' :
              // Do something
              break;
            case 'music-controls-seek-to':
              // Do something
              break;
            case 'music-controls-skip-forward':
              // Do something
              break;
            case 'music-controls-skip-backward':
              // Do something
              break;

              // Headset events (Android only)
              // All media button events are listed below
            case 'music-controls-media-button' :
                // Do something
                break;
            case 'music-controls-headset-unplugged':
                // Do something
                break;
            case 'music-controls-headset-plugged':
                // Do something
                break;
            default:
                break;
          }
    });
    this._musicControls.listen(); // activates the observable above
    this._musicControls.updateIsPlaying(true);
  }


       

      
startAudio() {      

    
        
    
        if(localStorage.player == 'play'){
            
            
                this._player.pauseProvider();
                this._musicControls.updateIsPlaying(true);
            
                localStorage.setItem("player", "stop");
                this.buttonIcon = "ios-play";
        }
        else
        
        {
            
      
            
             setInterval(()=>{   
                let path = 'https://www.mediaone-digital.ch/cache/onefm.json?hash_id=' + Math.random();
                let encodedPath = encodeURI(path);
                let timeoutMS = 10000;

                this.http.get(encodedPath)
                    .timeout(timeoutMS)
                    .map(res => res.json()).subscribe(data => {

                        let responseData = data;
                        console.log(responseData);
                        setTimeout(() => {
                            
                            if(this.live == data.live[0].interpret){
                                //
                            }
                            else{
                                // this.params.data = data;
                                this.startMusicControls(data.live[0].title,data.live[0].interpret, data.live[0].imageURL);
                                this.live = data.live[0].interpret;
                            }
                            
                        },8000);


                    },
                    err => {
                        console.log('error in ETPhoneHome');
                    });
            
             },4000);
            

            
            
             setInterval(function(){     
                  $.ajaxSetup({ cache: false });
                    $.getJSON('https://www.mediaone-digital.ch/cache/onefm.json', function(data){
                        //data.live[0].playtime){	
                       //this.startMusicControls(data.live[0].title,data.live[0].interpret);
                        $('#songTitle').html(data.live[0].interpret+'<br>'+data.live[0].title);
                        $('#songCover').attr('src',data.live[0].imageURL);
            });},3000);  
            
            
            localStorage.setItem("player", "play");
            this.buttonIcon = "ios-pause";

            console.log('Play Button clicked');
            this._player.playProvider();
            //this.startMusicControls('One FM','Direct','https://www.onefm.ch/wp-content/themes/mog-child/webradios/0.jpg');

}



  }





    private openNews(){
        //console.log(this.login);
        this.navCtrl.push(NewsPage);
    }

    private openPartenaires(){
        //console.log(this.login);
        this.navCtrl.push(SponsorsPage);
    }

    private openInfos(){
        //console.log(this.login);
        this.navCtrl.push(InfosPage);
    }

private openBilletterie(){
	 window.open("https://etickets.infomaniak.com/shop/feFlKGWVOg/", '_system');
         //   const browser = this.iab.create('https://etickets.infomaniak.com/shop/feFlKGWVOg/','_blank',{location:'yes', hardwareback: 'no'}); 
}
}
