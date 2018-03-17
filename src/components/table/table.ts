import { Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the TableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-table',
  templateUrl: 'table.html'
})
export class TableComponent {

  text: string;

  constructor(private events: Events) {
    this.getTableData('adults')
    this.events.subscribe('team:composition', (val) => {
      console.log(val);
      this.getTableData(val);
    });
  }

  getTableData(teamComposition) {
    this.text = teamComposition; 
  }

}
