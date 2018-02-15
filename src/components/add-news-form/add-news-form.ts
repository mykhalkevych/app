import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';

/**
 * Generated class for the AddNewsFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-news-form',
  templateUrl: 'add-news-form.html'
})
export class AddNewsFormComponent {

  text: string;

  addNewsFrom: FormGroup;

  constructor(
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private dataService: DatabaseService
  ) {

    this.addNewsFrom = this.formBuilder.group({
      title: ['', [Validators.required]],
      desc: [''],
      text: ['', Validators.required],
      imgSrc: ['https://us.123rf.com/450wm/efks/efks1503/efks150300027/37691198-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD.jpg?ver=6']
    })
  }
  addNews() {
    let published = Date.now();
    let data = Object.assign({}, this.addNewsFrom.value, {published})
    this.dataService.addNews(data);
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
