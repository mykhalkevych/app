import { DatabaseService } from './../../services/database.service';
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

  teams: Array<any> = [];

  constructor(
    private events: Events,
    private dataService: DatabaseService) {
    this.getTableData('adults')
    this.events.subscribe('team:composition', (val) => {
      this.getTableData(val);
    });

  }

  getTableData(teamComposition) {
    let tableList = 'teams';
    if (teamComposition !== 'adults') {
      tableList = 'teenagersTeams';
    }
    this.dataService.getTeams(tableList, 'top')
      .valueChanges()
      .subscribe(teams => {
        this.teams = this.sortTeams(teams);
      })
  }

  sortTeams(teams: Array<any>) {
    return teams.sort((a, b): any => {
      if (a.tournaments.league.points !== b.tournaments.league.points) {
        return a.tournaments.league.points < b.tournaments.league.points;
      } else {
        let goals1 = a.tournaments.league.goalsScored - a.tournaments.league.goalsMissed;
        let goals2 = b.tournaments.league.goalsScored - b.tournaments.league.goalsMissed;
        return goals1 < goals2;
      }
    })
  }

}
