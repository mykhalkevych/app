import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-news',
  templateUrl: 'detail-news.html',
})
export class DetailNewsPage {
  news: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = this.navParams.data.news;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailNewsPage');
  }

}
