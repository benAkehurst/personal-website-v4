import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(public dataService: DataService) { }

    contact: String = 'Hello Contact';

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
