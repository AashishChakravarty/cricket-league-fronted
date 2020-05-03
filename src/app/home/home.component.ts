import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentLeagues: any = [];
  previousLeagues: any = [];
  futureLeagues: any = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getOngoingLeagues();
    this.getPreviousLeagues();
    this.getFutureLeagues();
  }

  getOngoingLeagues() {
    this.homeService.currentLeague().subscribe(response => {
      if (response.status) {
        this.currentLeagues = response.data
      } else {
        console.log(response.message);

      }
    }, err => {
      console.log(err);
    })
  }

  getPreviousLeagues() {
    this.homeService.previousLeague().subscribe(response => {
      if (response.status) {
        this.previousLeagues = response.data
      } else {
        console.log(response.message);

      }
    }, err => {
      console.log(err);
    })
  }

  getFutureLeagues() {
    this.homeService.futureLeague().subscribe(response => {
      if (response.status) {
        this.futureLeagues = response.data
      } else {
        console.log(response.message);

      }
    }, err => {
      console.log(err);
    })
  }
}
