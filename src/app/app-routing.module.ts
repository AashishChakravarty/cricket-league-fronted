import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { MatchComponent } from './match/match.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'league/:id', component: LeaguesComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: 'match/:id', component: MatchComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
