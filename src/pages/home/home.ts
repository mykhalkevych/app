import { AddNewsFormComponent } from './../../components/add-news-form/add-news-form';
import { DatabaseService } from './../../services/database.service';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

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
    .subscribe(list => {
      this.news = list;
    })
  }

  openAddNewsForm() {
    console.log(2)
    let modalForm = this.modalCtrl.create(AddNewsFormComponent);
    modalForm.present();
  }

}
