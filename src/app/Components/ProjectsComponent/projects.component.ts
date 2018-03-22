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
            description: 'My first fullstack CRUD app built as part of my web dev studies.',
            techStack: 'AngularJS, NodeJS, MongoDB',
            githubLink: 'https://github.com/benAkehurst/playlistim-v2',
            liveDemoLink: 'https://www.youtube.com/embed/I0kNhqMoC3I'
        },
        {
            name: 'Hanoi',
            image: 'hanoi.jpg',
            description: 'A mockup website for a resturant in Tel Aviv.',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/hanoi-website-mockup',
            liveDemoLink: 'https://benakehurst.github.io/hanoi-website-mockup/#!/'
        },
        {
            name: 'Gif Search',
            image: 'gifSearch.jpeg',
            description: 'Using the Giphy API, you can search GIFS.',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/gif-search',
            liveDemoLink: 'https://benakehurst.github.io/gif-search/#!/'
        },
        {
            name: 'Unique Password Generator',
            image: 'passwordgenerator.jpg',
            description: 'A random passowrd generator with strength checker.',
            techStack: 'AngularJS',
            githubLink: 'https://github.com/benAkehurst/password-generator',
            liveDemoLink: 'https://password-generator-e6136.firebaseapp.com/#!/'
        }
    ];
    gitHubUrl = 'https://github.com/benAkehurst';

    ngOnInit() {

    }

    goToGithubPoject(projectGithubUrl) {
        window.open(projectGithubUrl, '_blank').focus();
    }

    goToLiveProject(projectUrl) {
        window.open(projectUrl, '_blank').focus();
    }

    goToGitHub() {
        window.open(this.gitHubUrl, '_blank').focus();
    }

}
