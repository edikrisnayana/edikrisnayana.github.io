import { Component, OnInit, AfterViewInit, inject, ChangeDetectorRef, signal, effect } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { INTERESTS_DATA } from '../../data/interests.data';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './interests.html',
  styleUrls: ['./interests.scss', '../../shared/styles/common.scss'],
})
export class Interests implements OnInit, AfterViewInit {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);
  private themeService = inject(ThemeService);

  interests: string[] = [];

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
    this.loadInterests();
  }

  ngAfterViewInit() {
    // Additional initialization if needed
  }

  loadInterests() {
    // Use static data instead of HTTP request
    this.interests = INTERESTS_DATA;
    this.cdr.detectChanges();
  }
}
