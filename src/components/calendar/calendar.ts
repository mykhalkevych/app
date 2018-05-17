import { DatabaseService } from './../../services/database.service';
import { Component } from '@angular/core';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent {

  text: string;
  toursData: any = [];
  tours: any = {};
  constructor(
    private dataService: DatabaseService
  ) {
    console.log('Hello CalendarComponent Component');
    this.text = 'Hello World';

    this.dataService.getGames('topLeague')
      .valueChanges()
      .subscribe(games => {
        games.map((game:any) => {
          if(!this.tours[game.date]) {
            this.toursData.push(game.date);
            this.tours[game.date] = [];
          }
          this.tours[game.date].push(game);
        });
        console.log(this.tours);
      })
  }

}
