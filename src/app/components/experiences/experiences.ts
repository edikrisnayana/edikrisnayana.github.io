import { Component, OnInit, AfterViewInit, inject, ChangeDetectorRef, signal, effect } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkExperience } from '../../models/work-experience';
import { ProjectExperience } from '../../models/project-experience';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { WORK_EXPERIENCES_DATA } from '../../data/work-experiences.data';
import { PROJECT_EXPERIENCES_DATA } from '../../data/project-experiences.data';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, CommonModule],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss', '../../shared/styles/common.scss'],
})
export class Experiences implements OnInit, AfterViewInit {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);
  private themeService = inject(ThemeService);

  workExperiences: WorkExperience[] = [];
  projectExperiences: ProjectExperience[] = [];

  // Computed signals for reactive theme updates
  protected readonly currentThemeSignal = signal(this.themeService.currentTheme());
  protected readonly isDarkModeSignal = signal(this.themeService.isDarkMode());

  constructor() {
    // Watch for theme changes and trigger change detection
    effect(() => {
      const theme = this.themeService.currentTheme();
      this.currentThemeSignal.set(theme);
      this.isDarkModeSignal.set(this.themeService.isDarkMode());
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
    this.loadWorkExperiences();
    this.loadProjectExperiences();
  }

  ngAfterViewInit() {
    // Manually trigger change detection after view init for SSR
    this.cdr.detectChanges();
  }

  loadWorkExperiences() {
    // Use static data instead of HTTP request
    this.workExperiences = WORK_EXPERIENCES_DATA;
    this.cdr.detectChanges();
  }

  loadProjectExperiences() {
    // Use static data instead of HTTP request
    this.projectExperiences = PROJECT_EXPERIENCES_DATA;
    this.cdr.detectChanges();
  }

  getDuration(startDate: string, endDate: string | null, currentJob: boolean): string {
    if (currentJob) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate}`;
  }
}
