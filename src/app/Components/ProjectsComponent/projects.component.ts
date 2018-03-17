import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(public dataService: DataService) { }

    projetcts: String = 'Hello projects';

    ngOnInit() {

    }

}
