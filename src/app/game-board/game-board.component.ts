import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from '../memory-game.service';
import { PlayingCard } from '../playing-card/playing-card.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  public cards: PlayingCard[];
  public isWin: boolean;
  public readOnly: boolean;

  constructor(
    public memoryGameService: MemoryGameService,
  ) {
    this.resetGameBoard();
  }

  ngOnInit(): void {
  }

  public disableBoard(): void {
    this.readOnly = true;
  }

  public flip(card: PlayingCard): void {
    this.cards = this.memoryGameService.checkCards(this.cards, card.value);
    this.readOnly = false;
    this.isWin = this.memoryGameService.checkWin(this.cards);
  }

  public resetGameBoard(): void {
    this.cards = this.memoryGameService.getNewCardDeck();
    this.isWin = false;
    this.readOnly = false;
  }
}
