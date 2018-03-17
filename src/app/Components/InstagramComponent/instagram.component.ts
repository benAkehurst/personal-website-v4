import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Http } from '@angular/http/src/http';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

    constructor(public dataService: DataService) { }
    errors: any;
    instagram: String = 'Hello instagram';
    instagramUserName: String = '';
    twelveRecentImages: any[] = [];
    urls: Array<any> = [];

    ngOnInit() {
        this.getInstagramPhotos();
    }

    public getInstagramPhotos() {
        this.dataService.getInstagramPhotos().subscribe(res => {
            this.instagramUserName = res.graphql.user.username;
            this.twelveRecentImages = res.graphql.user.edge_owner_to_timeline_media.edges;
            this.getRecentImageUrls();
        },
        error => {
            this.errors = error;
        });
    }

    public getRecentImageUrls() {
        this.twelveRecentImages.forEach(i => {
            this.urls.push(
            {
                'url' : i.node.display_url
            });
        });
    }

    public openInstagram() {
        window.open('https://www.instagram.com/' + this.instagramUserName, '_blank').focus();
    }
}
