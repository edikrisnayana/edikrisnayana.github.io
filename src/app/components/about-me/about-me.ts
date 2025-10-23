import { Component, OnInit, AfterViewInit, inject, ChangeDetectorRef, signal, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactInfo } from '../../models/contact-info';
import { ThemeService } from '../../services/theme.service';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss', '../../shared/styles/common.scss'],
})
export class AboutMe implements OnInit, AfterViewInit {
  private cdr = inject(ChangeDetectorRef);
  private themeService = inject(ThemeService);
  private iconService = inject(IconService);

  contactInfo: ContactInfo[] = [
    {
      name: 'whatsapp',
      url: 'https://wa.me/6285731306718',
      icon: 'whatsapp-custom',
      label: 'WhatsApp'
    },
    {
      name: 'email',
      url: 'mailto:ejikrisnayana@gmail.com',
      icon: 'email-custom',
      label: 'Email'
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/edikrisnayana',
      icon: 'linkedin-custom',
      label: 'LinkedIn'
    },
    {
      name: 'github',
      url: 'https://github.com/edikrisnayana',
      icon: 'github-custom',
      label: 'GitHub'
    }
  ];

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
    // IconService will handle icon registration
  }

  ngAfterViewInit() {
    // Manually trigger change detection after view init for SSR
    this.cdr.detectChanges();
  }
}
