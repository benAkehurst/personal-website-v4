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
            image: 'munch.jpeg',
            // tslint:disable-next-line:max-line-length
            description: 'It\'s still a work in progress, but this app is designed to show you a route of places to go out relative to your location.',
            techStack: 'Angular, NodeJS',
            githubLink: 'https://github.com/benAkehurst/food-search-v2',
            liveDemoLink: ''
        },
        {
            name: 'Random Colors',
            image: 'randomColors.gif',
            description: 'I built this app for a youtube video tutorial, but when you hit space you get a new random color.',
            techStack: 'HTML, CSS, Javascript',
            githubLink: 'https://github.com/benAkehurst/randomColorsPro',
            liveDemoLink: 'https://benakehurst.github.io/randomColorsPro/'
        },
        {
            name: 'Playlistim',
            image: 'playlistim.png',
            description: 'A test',
            techStack: 'AngularJS, NodeJS, MongoDB',
            githubLink: 'https://github.com/benAkehurst/playlistim-v2',
            liveDemoLink: 'https://www.youtube.com/embed/I0kNhqMoC3I'
        },
        {
            name: 'Hanoi',
            image: 'hanoi.jpg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/hanoi-website-mockup',
            liveDemoLink: 'https://benakehurst.github.io/hanoi-website-mockup/#!/'
        },
        {
            name: 'Gif Search',
            image: 'gifSearch.jpeg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/gif-search',
            liveDemoLink: 'https://benakehurst.github.io/gif-search/#!/'
        },
        {
            name: 'Unique Password Generator',
            image: 'passwordgenerator.jpg',
            description: 'A test',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/password-generator',
            liveDemoLink: 'https://password-generator-e6136.firebaseapp.com/#!/'
        }
    ];
    professionalWork: Array<any> = [
        {
            client: 'Company A',
            theme : 'Cyber Security SaaS',
            technology: 'AngularJS',
            role: 'Team Member'
        },
        {
            client: 'Maccabi Haifa FC',
            theme: 'Website Re-design',
            technology: 'CSS',
            role: 'Team Member'
        },
        {
            client: 'Company W',
            theme: 'Socail Networking Forum',
            technology: 'Angular, NodeJS, MongoDB, AWS',
            role: 'Team Lead'
        }
    ];
    gitHubUrl = 'https://github.com/benAkehurst';

    ngOnInit() {

    }

    goToGitHub() {
        window.open(this.gitHubUrl, '_blank').focus();
    }

}
