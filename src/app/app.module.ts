import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { LeaguesComponent } from './leagues/leagues.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaguesComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
