import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  id: any;
  matchSummary: any;

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.summary();
  }

  summary() {
    this.matchService.getMatchSummary(this.id).subscribe(response => {
      if (response.status) {
        this.matchSummary = response.data;
      }
    }, err => {
      console.log(err);

    })
  }
}
