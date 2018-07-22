import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Http } from '@angular/http/src/http';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

    constructor(public dataService: DataService) { }
    errors: any;
    instagram: String = 'Hello instagram';
    instagramUserName: String = 'thatbritisraeli';

    ngOnInit() {
    }

    public openInstagram() {
        window.open('https://www.instagram.com/' + this.instagramUserName, '_blank').focus();
    }
}
