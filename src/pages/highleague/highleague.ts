import { DatabaseService } from './../../services/database.service';
import { CalendarComponent } from './../../components/calendar/calendar';
import { TableComponent } from './../../components/table/table';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatisticComponent } from '../../components/statistic/statistic';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the HighleaguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-highleague',
  templateUrl: 'highleague.html',
})
export class HighleaguePage {

  page1 = TableComponent;
  page2 = CalendarComponent;
  page3 = StatisticComponent;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  teamComposition = 'adults';
  constructor
    (public navCtrl: NavController,
    private dataService: DatabaseService) {
  }

  slideToIndex(index: number) {
    this.superTabs.slideTo(index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighleaguePage');
  }

  onTabSelect(tab: { index: number; id: string; }) {
    console.log(`Selected tab: `, tab);
  }

  segmentChanged(e) {
    this.dataService.changeTeamComposition(e.value);
  }

}
