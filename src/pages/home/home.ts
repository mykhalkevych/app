import { AddNewsFormComponent } from './../../components/add-news-form/add-news-form';
import { DatabaseService } from './../../services/database.service';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news = [];

  constructor(
    public navCtrl: NavController,
    private dataService: DatabaseService,
    public modalCtrl: ModalController
  ) {
    this.dataService.getNewsList()
      .valueChanges()
      .subscribe(list => {
        this.news = list.reverse();
      })
  }

  openAddNewsForm() {
    let modalForm = this.modalCtrl.create(AddNewsFormComponent);
    modalForm.present();
  }

  loadMoreNews(infiniteScroll) {
    this.dataService.getNewsList(this.news.length + 3)
      .valueChanges()
      .subscribe(list => {
        this.news = list.reverse(); 
        infiniteScroll.complete();
      })
  }

}
