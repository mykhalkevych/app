import { Component } from '@angular/core';

/**
 * Generated class for the StatisticComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'statistic',
  templateUrl: 'statistic.html'
})
export class StatisticComponent {

  text: string;

  constructor() {
    console.log('Hello StatisticComponent Component');
    this.text = 'Hello World';
  }

}
