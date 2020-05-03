import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getLeague(data: any): Observable<any> {
    return this.http.get(this.baseUrl + 'home/league/' + data);
  }
}
