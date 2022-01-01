import { Component, OnInit } from '@angular/core';
import { SkillDataService } from './service/skill-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { Skill } from '../core/model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../app.component.scss']
})
export class SkillsComponent implements OnInit {

  width: number = window.innerWidth;
  progressbarStyle = {
    "width": (this.width - 50)+'px'
  };

  skills: Array<Skill> = [];
  maxValue: number = 10;

  constructor(private skillDataService: SkillDataService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getSkills();
    this.resizeProgressBar();
  }

  resizeProgressBar() {
    if(this.width >= 768) {
      this.progressbarStyle = {
        "width": '500px'
      }
    }
  }

  getSkills() {
    this.skillDataService.getSkills()
      .subscribe(resp => {
        this.skills = resp;
        this.registerIcons();
      },
      error => alert(error.message))
  }

  registerIcons() {
    this.skills.forEach(skill => {
      this.iconRegistry.addSvgIcon(skill.iconName, this.sanitizer.bypassSecurityTrustResourceUrl(skill.iconUrl));
    });
  }

}
