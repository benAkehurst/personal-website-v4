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

    ngOnInit() {

    }

}
