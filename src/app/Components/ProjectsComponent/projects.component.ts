import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(public dataService: DataService) { }

    projects: Array<any> = [
        {
            name: 'test',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'AngularJS, NodeJS'
        },
        {
            name: 'test',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'AngularJS, NodeJS'
        }
    ];

    ngOnInit() {

    }

}
