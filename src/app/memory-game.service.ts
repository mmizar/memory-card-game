import { Injectable } from '@angular/core';
import { PlayingCard } from './playing-card/playing-card.component';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  public readonly MAX_FLIPPED_CARDS = 2;
  public readonly NUMBER_OF_ROWS = 4;
  public readonly NUMBER_OF_COLUMNS = 6;

  constructor() { }

  public getNewCardDeck(): PlayingCard[] {
    let cardDeck: PlayingCard[] = <PlayingCard[]>[];
    let values: string[] = this.generateValues(this.NUMBER_OF_COLUMNS * this.NUMBER_OF_ROWS, this.MAX_FLIPPED_CARDS);

    let k = 0;
    for (let i = 0; i < this.NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < this.NUMBER_OF_COLUMNS; j++) {
        cardDeck.push(<PlayingCard>{
          isFaceUp: false,
          row: String.fromCharCode(65 + i),
          column: j,
          value: values[k],
          removed: false,
        });
        k++;
      }
    }

    return cardDeck;
  }

  public checkCards(cards: PlayingCard[], value: string): PlayingCard[] {
    const activeCards: PlayingCard[] = cards.filter((card: PlayingCard) => card.isFaceUp);
    if (activeCards.length > 1) {
      const isMatch: boolean = this.isMatch(activeCards, value);
      return isMatch
        ? this.handleMatch(cards)
        : this.handleMismatch(cards);
    }
    else return cards;
  }

  public checkWin(cards: PlayingCard[]): boolean {
    return !cards.some((card: PlayingCard) => !card.removed);
  }

  private isMatch(cards: PlayingCard[], value: string): boolean {
    return value && cards?.filter((card: PlayingCard) => card?.value !== value).length === 0;
  }

  private handleMatch(cards: PlayingCard[]): PlayingCard[] {
    return cards.map((card: PlayingCard) => card.isFaceUp ? <PlayingCard>{ ...card, removed: true, isFaceUp: false } : card);
  }

  private handleMismatch(cards: PlayingCard[]): PlayingCard[] {
    return cards.map((card: PlayingCard) => <PlayingCard>{ ...card, isFaceUp: false });
  }

  private generateValues(numValues: number, numMatches: number): string[] {
    let values: string[] = [];
    for (let i = numValues / numMatches, j = 0; i > 0; i--, j++) {
      for (let k = 0; k < numMatches; k++) {
        values.push(String.fromCharCode(65 + j));
      }
    }
    return this.shuffleValues(values);
  }

  private shuffleValues(values: string[]): string[] {
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = values[i]
      values[i] = values[j]
      values[j] = temp
    }
    return values;
  }
}
