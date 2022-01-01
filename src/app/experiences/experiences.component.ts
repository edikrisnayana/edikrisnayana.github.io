import { Component, OnInit } from '@angular/core';
import { ExperienceDataService } from './service/experience-data.service';

import { Project } from '../core/model/project';
import { Work } from '../core/model/work';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss', '../app.component.scss']
})
export class ExperiencesComponent implements OnInit {

  projects: Array<Project> = [];
  works: Array<Work> = [];

  constructor(private experienceDataService: ExperienceDataService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getWorks();
  }

  getProjects() {
    this.experienceDataService.getProjects()
      .subscribe(resp => {
        this.projects = resp;
      },
      error => alert(error.message))
  }

  getWorks() {
    this.experienceDataService.getWorks()
      .subscribe(resp => {
        this.works = resp;
      },
      error => alert(error.message))
  }

}
