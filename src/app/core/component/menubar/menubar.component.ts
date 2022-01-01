import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  width: number = window.innerWidth;
  toolbarStyle = {
    "width": this.width+'px'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(path: string = ''): void {
    const navigationDetails: string[] = ['/'];
    if(path.length) {
      navigationDetails.push(path);
    }
    this.router.navigate(navigationDetails);
  }

}
