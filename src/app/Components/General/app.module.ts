import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import keys from '../../Models/FrontEndKeys';

import { AppComponent } from './app.component';
import { AboutComponent } from './../AboutMeComponent/about.component';
import { IntroductionComponent } from './../IntroductionComponent/introduction.component';
import { DevelopmentComponent } from './../DevelopmentComponent/development.component';
import { ProjectsComponent } from './../ProjectsComponent/projects.component';
import { InstagramComponent } from './../InstagramComponent/instagram.component';
import { YoutubeComponent } from './../YoutubeComponent/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntroductionComponent,
    DevelopmentComponent,
    ProjectsComponent,
    InstagramComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
