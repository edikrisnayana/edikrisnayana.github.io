import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    // Only register icons in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.registerIcons();
    }
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

    // Register social media icons
    this.iconRegistry.addSvgIcon(
      'whatsapp-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/whatsapp.svg')
    );
    this.iconRegistry.addSvgIcon(
      'email-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/mail.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/linkedin.svg')
    );
    this.iconRegistry.addSvgIcon(
      'github-custom',
      this.sanitizer.bypassSecurityTrustResourceUrl('/icons/social-media/github.svg')
    );
  }
}
