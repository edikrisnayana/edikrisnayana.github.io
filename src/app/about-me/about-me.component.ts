import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('linkedin-custom', sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/social-media/linkedin.svg"));
    iconRegistry.addSvgIcon('github-custom', sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/social-media/github.svg"));
    iconRegistry.addSvgIcon('whatsapp-custom', sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/social-media/whatsapp.svg"));
    iconRegistry.addSvgIcon('mail-custom', sanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/social-media/mail.svg"));
  }

  ngOnInit(): void {
  }

}
