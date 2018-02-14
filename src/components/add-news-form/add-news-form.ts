import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
    ) {
    
      this.addNewsFrom = this.formBuilder.group({
        title: ['', [Validators.required]],
        description: [''],
        text: ['', Validators.required],
        file: ['']
      })
  }
  addNews() {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
