import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-youtube',
    templateUrl: './youtube.component.html',
    styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

    constructor(public dataService: DataService) { }

    youtube: String = 'Hello youtube';
    currentSubscribers: String = '';

    ngOnInit() {
        this.getSubscriberCount();
    }

    public getSubscriberCount() {
        this.dataService.getYoutueSubCount().subscribe(res => {
            this.currentSubscribers = res.items[0].statistics.subscriberCount;
        });
    }

    public goToYoutube() {
        window.open('https://www.youtube.com/user/ClicheProductionsUK', '_blank').focus();
    }

}
