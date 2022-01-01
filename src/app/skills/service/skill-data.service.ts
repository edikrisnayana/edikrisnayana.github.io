import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Skill } from '../../core/model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {

  constructor(private http: HttpClient) { }

  url = "assets/json/skill-list.json";

  getSkills(): Observable<Array<Skill>> {
    return this.http.get<Array<Skill>>(this.url);
  }
}
