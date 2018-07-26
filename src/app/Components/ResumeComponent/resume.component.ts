import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Object = {};

  constructor(public dataService: DataService) {
    if (!this.resume) {
      this.resume = {};
    }
  }

  ngOnInit() {
    this.getResumeJSON();
  }

  public getResumeJSON() {
    this.dataService.getResumeData()
      .subscribe(res => {
        this.resume = res;
      });
  }
}
