import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../../core/model/project';
import { Work } from '../../core/model/work';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService {

  constructor(private http: HttpClient) { }

  projectUrl = "assets/json/project-list.json";
  workUrl = "assets/json/work-list.json";

  getProjects(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(this.projectUrl);
  }

  getWorks(): Observable<Array<Work>> {
    return this.http.get<Array<Work>>(this.workUrl);
  }
}
