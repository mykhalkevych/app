import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../services/database.service';
import { AngularFireStorage } from 'angularfire2/storage';

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
  image: any;
  constructor(
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private dataService: DatabaseService,
    private storage: AngularFireStorage) {

    this.addNewsFrom = this.formBuilder.group({
      title: ['', [Validators.required]],
      desc: [''],
      text: ['', Validators.required],
      imgSrc: ['']
    })
  }
  addNews() {
    let published = Date.now();
    let data = Object.assign({}, this.addNewsFrom.value, { published })
    this.dataService.addNews(data);
    this.dismiss();
  }

  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file)
    const filePath = 'name-your-file-path-here';
    const f = this.storage.upload(file.name, file);
    this.getImageLink(f)
      .subscribe(url => {
        this.addNewsFrom.controls['imgSrc'].setValue(url);
      })

  }

  getImageLink(file) {
    return file.downloadURL();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
