import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpandableLayout2Module } from '../../components/expandable/layout-2/expandable-layout-2.module';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

/**
 * Generated class for the PartenairesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-partenaires',
  templateUrl: 'partenaires.html',
})
export class PartenairesPage {

        params: any = {};

  constructor(private ga: GoogleAnalytics, public navCtrl: NavController, public navParams: NavParams) {
        

      this.ga.startTrackerWithId('UA-2736326-3')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.trackView('partenaires');
          this.ga.trackEvent('Navigation', 'Partenaires');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
     this.params.data = {
        "items" : [ {
          "backgroundImage" : "assets/images/background/1.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 1,
          "subtitle" : "Monday, 15th Oct. 2017",
          "title" : "Main Stage Event"
        }, {
          "backgroundImage" : "assets/images/background/2.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 2,
          "subtitle" : "Wendsday, 21st Oct. 2017",
          "title" : "Free Ride"
        }, {
          "backgroundImage" : "assets/images/background/0.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 3,
          "subtitle" : "Wednesday, July 05, 1983",
          "title" : "Mountain Tour"
        }, {
          "backgroundImage" : "assets/images/background/5.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 4,
          "subtitle" : "Sunday, October 08, 1921",
          "title" : "Sea Tour"
        }, {
          "backgroundImage" : "assets/images/background/6.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 5,
          "subtitle" : "Monday, June 26, 1949",
          "title" : "Bridge Tour"
        }, {
          "backgroundImage" : "assets/images/background/7.jpg",
          "expandItems" : {
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            "iconsStars" : [ {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : true
            }, {
              "iconActive" : "icon-star",
              "iconInactive" : "icon-star-outline",
              "isActive" : false
            } ],
            "reviews" : "4.12 (78 reviews)",
            "title" : "Lorem ipsum dolor sit amet"
          },
          "icon" : "ios-arrow-dropright",
          "iconText" : "Read more",
          "id" : 6,
          "subtitle" : "Thursday, May 19, 1992",
          "title" : "Open Air Concert"
        } ]
      }

    this.params.events = {
        'onItemClick': function(item: any) {
           console.log('onItemClick');
        },
        'onRates': function(index: number) {
            console.log('onRates');
        },
        'onCheckBoxClick': function(item: any) {
            console.log('onCheckBoxClick');
        },
        'onButtonClick' : function(item: any) {
           console.log('onButtonClick');
        }
    };
      
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartenairesPage');
  }

}
