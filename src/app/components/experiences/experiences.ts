import { Component, OnInit, AfterViewInit, inject, ChangeDetectorRef, signal, effect } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { WorkExperience } from '../../models/work-experience';
import { ProjectExperience } from '../../models/project-experience';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, CommonModule],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences implements OnInit, AfterViewInit {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient);
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
    this.http.get<WorkExperience[]>('/json/work-list.json').subscribe({
      next: (data) => {
        this.workExperiences = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading work experiences:', error);
      }
    });
  }

  loadProjectExperiences() {
    this.http.get<ProjectExperience[]>('/json/project-list.json').subscribe({
      next: (data) => {
        this.projectExperiences = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading project experiences:', error);
      }
    });
  }

  getDuration(startDate: string, endDate: string | null, currentJob: boolean): string {
    if (currentJob) {
      return `${startDate} - Present`;
    }
    return `${startDate} - ${endDate}`;
  }
}
