import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(public dataService: DataService) { }

    ngOnInit() {

    }

    public goToGitHub() {
        window.open('https://github.com/benAkehurst', '_blank').focus();
    }

    public goToInstagram() {
        window.open('https://www.instagram.com/thatbritisraeli', '_blank').focus();
    }

    public goToYoutube() {
        window.open('https://www.youtube.com/user/ClicheProductionsUK', '_blank').focus();
    }

    public goToLinkedin() {
        window.open('https://www.linkedin.com/in/ben-akehurst/', '_blank').focus();
    }

}
