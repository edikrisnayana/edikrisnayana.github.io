import { Component, signal, inject, ChangeDetectorRef, effect } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss', '../../../shared/styles/common.scss'],
})
export class Navigation {
  protected readonly isMenuOpen = signal(false);
  private themeService = inject(ThemeService);
  private cdr = inject(ChangeDetectorRef);

  // Computed signals for reactive theme updates
  protected readonly currentThemeSignal = signal(this.themeService.currentTheme());
  protected readonly isDarkModeSignal = signal(this.themeService.isDarkMode());

  constructor(private router: Router) {
    // Watch for theme changes and trigger change detection
    effect(() => {
      const theme = this.themeService.currentTheme();
      this.currentThemeSignal.set(theme);
      this.isDarkModeSignal.set(this.themeService.isDarkMode());
      this.cdr.detectChanges();
    });
  }

  protected toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected isActiveRoute(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '');
  }

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
    // Force change detection for zoneless
    this.cdr.detectChanges();
  }

  protected get currentTheme() {
    return this.themeService.currentTheme;
  }

  protected get isDarkMode() {
    return this.themeService.isDarkMode();
  }
}
