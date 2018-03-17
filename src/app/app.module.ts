import { CalendarComponent } from './../components/calendar/calendar';
import { TableComponent } from './../components/table/table';
import { DetailNewsPage } from './../pages/detail-news/detail-news';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseService } from './../services/database.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HighleaguePage } from './../pages/highleague/highleague';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import config from './config'
import { AddNewsFormComponent } from '../components/add-news-form/add-news-form';
import { ReactiveFormsModule } from '@angular/forms';
import { ShrinkHeader } from '../components/shrink-header/shrink-header.directive';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { StatisticComponent } from '../components/statistic/statistic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HighleaguePage,
    AddNewsFormComponent,
    DetailNewsPage,
    ShrinkHeader,
    TableComponent,
    CalendarComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config.firebase),
    AngularFireStorageModule,
    SuperTabsModule.forRoot(),
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HighleaguePage,
    AddNewsFormComponent,
    DetailNewsPage,
    TableComponent,
    CalendarComponent,
    StatisticComponent    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireDatabase,
    AngularFireStorageModule,
    DatabaseService
  ]
})
export class AppModule { }
