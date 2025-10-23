import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Skill } from '../../models/skill';
import { SKILLS_DATA } from '../../data/skills.data';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss', '../../shared/styles/common.scss'],
})
export class Skills implements OnInit {
  skills = signal<Skill[]>([]);
  loading = signal(true);

  // Computed signal for checking if we have skills
  hasSkills = computed(() => this.skills().length > 0);

  private iconService = inject(IconService);

  constructor() {
    // IconService will handle icon registration
  }

  ngOnInit() {
    this.loadSkills();
  }


  loadSkills() {
    // Use static data instead of HTTP request
    this.skills.set(SKILLS_DATA);
    this.loading.set(false);
  }

  getIconName(skillName: string): string {
    return skillName.toLowerCase();
  }
}
