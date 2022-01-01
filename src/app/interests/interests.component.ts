import { Component, OnInit } from '@angular/core';
import { InterestDataService } from './service/interest-data.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss', '../app.component.scss']
})
export class InterestsComponent implements OnInit {

  interests: Array<string> = [];

  constructor(private interestDataService: InterestDataService) { }

  ngOnInit(): void {
    this.getInterests();
  }

  getInterests() {
    this.interestDataService.getInterests()
      .subscribe(resp => {
        this.interests = resp;
      },
      error => alert(error.message))
  }

}
