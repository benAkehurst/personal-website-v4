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
    // ─── INSTAGRAM ──────────────────────────────────────────────────────────────────
    //
    public getInstagramPhotos() {
        return this.http
            .get('https://www.instagram.com/thatbritisraeli/?__a=1')
            .map(res => res.json());
    }
    //
    // ──────────────────────────────────────────────────────────────── INSTAGRAM ─────
    //

}
