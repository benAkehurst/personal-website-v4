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
            name: 'Munch',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'Angular, NodeJS',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            name: 'Random Colors',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'HTML, CSS, Javascript',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            name: 'Playlistim',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'AngularJS, NodeJS, MongoDB',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            name: 'Hanoi',
            image: 'hanoi.jpg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            name: 'Gif Search',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: '',
            liveDemoLink: ''
        },
        {
            name: 'Unique Password Generator',
            image: 'images/profilepic.jpg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: '',
            liveDemoLink: ''
        }
    ];
    professionalWork: Array<any> = [
        {
            client: 'Company A',
            theme : 'Cyber Security SaaS',
            technology: 'AngularJS',
            role: 'team member'
        },
        {
            client: 'Maccabi Haifa FC',
            theme: 'Website Re-design',
            technology: 'CSS',
            role: 'team member'
        },
        {
            client: 'Company W',
            theme: 'Socail Networking Forum',
            technology: 'Angular, NodeJS, MongoDB, AWS',
            role: 'team leader'
        }
    ];

    ngOnInit() {

    }

}
