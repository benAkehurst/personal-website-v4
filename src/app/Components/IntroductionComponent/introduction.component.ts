import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

    constructor(public dataService: DataService) { }

    IntroductionTest: String = 'Hello Introduction';

    ngOnInit() {

    }

}
