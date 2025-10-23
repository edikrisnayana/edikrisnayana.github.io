import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';
  private platformId = inject(PLATFORM_ID);
  
  // Signal for reactive theme changes
  public currentTheme = signal<Theme>('light');

  constructor() {
    // Initialize theme after platform check
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const initialTheme = this.getInitialTheme();
      this.currentTheme.set(initialTheme);
      this.applyTheme(initialTheme);
    } else {
      // Default to light theme on server
      this.currentTheme.set('light');
    }
  }

  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    try {
      // Check localStorage first
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        return savedTheme;
      }

      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (error) {
      console.warn('Error accessing localStorage or matchMedia:', error);
    }

    return 'light';
  }

  public toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  public setTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentTheme.set(theme);
    
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
    
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
  }

  public isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }
}
