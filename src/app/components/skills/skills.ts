import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { Skill } from '../../models/skill';

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

  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor(private http: HttpClient) {
    this.registerIcons();
  }

  ngOnInit() {
    this.loadSkills();
  }

  private registerIcons() {
    // Register skill icons
    this.iconRegistry.addSvgIcon(
      'java',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/skills/java.svg')
    );
    this.iconRegistry.addSvgIcon(
      'mongodb',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/skills/mongodb.svg')
    );
    this.iconRegistry.addSvgIcon(
      'aws',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/skills/aws.svg')
    );
    this.iconRegistry.addSvgIcon(
      'terraform',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/skills/terraform.svg')
    );
    this.iconRegistry.addSvgIcon(
      'git',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/skills/git.svg')
    );
  }

  loadSkills() {
    this.http.get<Skill[]>('/json/skill-list.json').subscribe({
      next: (data) => {
        this.skills.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading skills:', error);
        this.loading.set(false);
      }
    });
  }

  getIconName(skillName: string): string {
    return skillName.toLowerCase();
  }
}
