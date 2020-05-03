import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getMatchSummary(data: any): Observable<any> {
    return this.http.get(this.baseUrl + 'home/match/' + data);
  }
}
