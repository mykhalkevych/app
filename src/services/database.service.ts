import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";
import { Events } from "ionic-angular";


@Injectable()
export class DatabaseService {
    private news;
    constructor(
        private db: AngularFireDatabase,
        private storage: AngularFireStorage,
        public events: Events,
) {
        this.news = this.db.list('news');
        console.log(this.storage);

    }

    changeTeamComposition(teamComposition) {
        this.events.publish('team:composition', teamComposition);
        return teamComposition;
    }

    getNewsList(limit: number = 3) {
        return this.db.list('news', ref => ref.limitToLast(limit));
    }

    getTeams(tableList, league) {
        return this.db.list(tableList, ref => ref.orderByChild('league').equalTo(league));
    }

    getGames(tournament) {
        return this.db.list('games', ref => ref.orderByChild('tournament').equalTo(tournament));
    }

    addNews(news) {
        return this.news.push(news);
    }
}
