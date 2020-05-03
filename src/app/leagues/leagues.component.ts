import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../services/leagues/leagues.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  id: any;
  league: any;
  panelOpenState = false;

  constructor(
    private leaguesService: LeaguesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeague();
  }

  getLeague() {
    this.leaguesService.getLeague(this.id).subscribe(response => {
      if (response.status) {
        this.league = response.data;
      } else {
        console.log(this.league);
      }
    }, err => {
      console.log(err);
    })
  }

}
