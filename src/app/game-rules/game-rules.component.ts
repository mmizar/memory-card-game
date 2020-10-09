import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from '../memory-game.service';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss']
})
export class GameRulesComponent implements OnInit {
  public cardNumber: number;
  public matchNumber: number;

  constructor(
    public memoryGameService: MemoryGameService,
  ) {
    this.matchNumber = memoryGameService.MAX_FLIPPED_CARDS - 1;
    this.cardNumber = memoryGameService.NUMBER_OF_COLUMNS * memoryGameService.NUMBER_OF_ROWS
  }

  ngOnInit(): void {
  }
}
