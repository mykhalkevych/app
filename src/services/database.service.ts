import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";


@Injectable()
export class DatabaseService {
    private news;
    constructor(private db: AngularFireDatabase,
        private storage: AngularFireStorage) {
        this.news = this.db.list('news');
        console.log(this.storage);

    }

    getNewsList(limit: number = 3) {
        return this.db.list('news', ref => ref.limitToLast(limit));
    }

    addNews(news) {
        return this.news.push(news);
    }
}