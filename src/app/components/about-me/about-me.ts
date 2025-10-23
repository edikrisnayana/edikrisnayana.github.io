import { Component, OnInit, AfterViewInit, inject, ChangeDetectorRef, signal, effect } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactInfo } from '../../models/contact-info';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnInit, AfterViewInit {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);
  private themeService = inject(ThemeService);

  contactInfo: ContactInfo[] = [
    {
      name: 'whatsapp',
      url: 'https://wa.me/6281234567890',
      icon: 'whatsapp-custom',
      label: 'WhatsApp'
    },
    {
      name: 'email',
      url: 'mailto:edikrisnayana@example.com',
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
    // Register custom SVG icons
    this.matIconRegistry.addSvgIcon(
      'whatsapp-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/whatsapp.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'email-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/mail.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github-custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/github.svg')
    );
  }

  ngAfterViewInit() {
    // Manually trigger change detection after view init for SSR
    this.cdr.detectChanges();
  }
}
