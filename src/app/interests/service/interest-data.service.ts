import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestDataService {

  constructor(private http: HttpClient) { }

  url = "assets/json/interest-list.json";

  getInterests(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.url);
  }
}
