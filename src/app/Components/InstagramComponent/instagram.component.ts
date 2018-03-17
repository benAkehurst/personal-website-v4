import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

    constructor(public dataService: DataService) { }

    instagram: String = 'Hello instagram';

    ngOnInit() {

    }

}
