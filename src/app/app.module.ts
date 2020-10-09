import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { InfoAboutComponent } from './info-about/info-about.component';
import { GameRulesComponent } from './game-rules/game-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayingCardComponent,
    GameBoardComponent,
    InfoAboutComponent,
    GameRulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
