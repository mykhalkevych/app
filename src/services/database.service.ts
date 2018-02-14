import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";


@Injectable()
export class DatabaseService { 
    private news;
    constructor (private db: AngularFireDatabase,
        private storage: AngularFireStorage) {
        this.news = this.db.list('news');
    console.log(this.storage); 
        
    }

    getNewsList() {
        return this.db.list('news', ref => ref.limitToFirst(3)).valueChanges();
    }

    addNews(news) {
        return this.news.push(news);
    }
}