import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  width: number = window.innerWidth;
  buttonColors: Map<string, string>;
  toolbarStyle = {
    "width": this.width+'px'
  };

  constructor(private router: Router) {
    this.buttonColors = new Map<string, string>(
      [
        ["profile", "white"],
        ["experiences", "white"],
        ["skills", "white"],
        ["interests", "white"]
      ]
    )
  }

  ngOnInit(): void {
  }

  redirect(path: string = ''): void {
    const navigationDetails: string[] = ['/'];
    if(path.length) {
      navigationDetails.push(path);
    }
    this.router.navigate(navigationDetails);
  }

  getColor(key: string): string | undefined {
    return this.buttonColors.get(key);
  }

  setColor(key: string, color: string) {
    this.buttonColors.set(key, color);
  }
}
