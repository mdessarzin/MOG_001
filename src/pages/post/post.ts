import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
            drawerOptions: any;
link: string;
    title: string;
    text: any;
    date: string;
   image:any;
    cat: string;



showToolbar:boolean = false;
    headerImgSize:string = '100%';
    headerImgUrl:string = '';
    transition:boolean = false;
    cards: any;
    category: string = 'gear';

  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef, private sanitizer: DomSanitizer, platform: Platform, private socialSharing: SocialSharing) {
      this.cards = new Array(10);
      this.title = navParams.get('title');
      this.image = sanitizer.bypassSecurityTrustStyle('url('+ navParams.get('image') + ')');
      
      this.text = sanitizer.bypassSecurityTrustHtml(navParams.get('text'));
      this.date = navParams.get('date');
      this.cat = navParams.get('cat');
      this.link = navParams.get('link');

      
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


goBack() {
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad TransparentBarPage');


      // this.content.enableScrollListener();
  }
    onScroll($event: any){
        let scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        if(scrollTop < 0){
            this.transition = false;
            this.headerImgSize = `${ Math.abs(scrollTop)/2 + 100}%`;
        }else{
            this.transition = true;
            this.headerImgSize = '100%'
        }
        this.ref.detectChanges();
    }

}
