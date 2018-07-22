import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import keys from './../Models/FrontEndKeys';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    //
    // ─── YOUTUBE ────────────────────────────────────────────────────────────────────
    //
    public getYoutueSubCount() {
        return this.http
            .get('https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=ClicheProductionsUK&fields=items/statistics/subscriberCount&key=' + keys.YOUTUBE_KEY)
            .map(res => res.json());
    }
    //
    // ────────────────────────────────────────────────────────────────── YOUTUBE ─────
    //

}
