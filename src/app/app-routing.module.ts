import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { InfoAboutComponent } from './info-about/info-about.component';

const routes: Routes = [
  { path: 'game-board', component: GameBoardComponent },
  { path: 'info-about', component: InfoAboutComponent },
  { path: 'game-rules', component: GameRulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
