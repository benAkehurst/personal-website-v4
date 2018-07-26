import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
    selector: 'app-development',
    templateUrl: './development.component.html',
    styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {
  development: String = 'Hello Development';
  skillsData: Object = {};

  constructor(public dataService: DataService) {
    if (!this.skillsData) {
      this.skillsData = {};
    }
  }

  ngOnInit() {
    this.getSkillsJSON();
  }

  public getSkillsJSON() {
    this.dataService.getSkillsData()
      .subscribe(res => {
        this.skillsData = res;
      });
  }

}
