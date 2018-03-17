import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-development',
    templateUrl: './development.component.html',
    styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

    constructor(public dataService: DataService) { }

    development: String = 'Hello Development';

    ngOnInit() {

    }

}
