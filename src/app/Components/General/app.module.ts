import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from '../../Services/data.service';

import keys from '../../Models/FrontEndKeys';

import { AppComponent } from './app.component';
import { AboutComponent } from './../AboutMeComponent/about.component';
import { IntroductionComponent } from './../IntroductionComponent/introduction.component';
import { DevelopmentComponent } from './../DevelopmentComponent/development.component';
import { ProjectsComponent } from './../ProjectsComponent/projects.component';
import { InstagramComponent } from './../InstagramComponent/instagram.component';
import { YoutubeComponent } from './../YoutubeComponent/youtube.component';
import { ContactComponent } from './../ContactComponent/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntroductionComponent,
    DevelopmentComponent,
    ProjectsComponent,
    InstagramComponent,
    YoutubeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
