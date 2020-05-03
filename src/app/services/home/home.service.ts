import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  currentLeague(): Observable<any> {
    return this.http.get(this.baseUrl + 'home/current');
  }

  previousLeague(): Observable<any> {
    return this.http.get(this.baseUrl + 'home/previous');
  }

  futureLeague(): Observable<any> {
    return this.http.get(this.baseUrl + 'home/upcoming');
  }
}
