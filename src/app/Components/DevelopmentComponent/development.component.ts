import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-development',
    templateUrl: './development.component.html',
    styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

    constructor() { }

    development: String = 'Hello Development';

    ngOnInit() {

    }

}
