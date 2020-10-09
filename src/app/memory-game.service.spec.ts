import { TestBed } from '@angular/core/testing';

import { MemoryGameService } from './memory-game.service';
import { PlayingCard } from './playing-card/playing-card.component';

describe('MemoryGameService', () => {
  let service: MemoryGameService;
  let deck: PlayingCard[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryGameService);
    deck = service.getNewCardDeck();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a card deck', () => {
    expect(service.getNewCardDeck()).toBeTruthy();
  });

  it('should have a card deck of the correct length', () => {
    expect(deck).toBeTruthy();
    expect(deck.length).toEqual(service.NUMBER_OF_COLUMNS * service.NUMBER_OF_ROWS);
  });

  it('should generate a match for each card', () => {
    let matches = {};
    deck.forEach((card: PlayingCard) => {
      matches[card.value] = matches[card.value] === undefined ? 1 : matches[card.value] + 1;
    });
    const matchNumbers = Object.values(matches);
    expect(matchNumbers.some((matchNum: number) => matchNum !== service.MAX_FLIPPED_CARDS)).toBeFalse();
  });

  it('should win when all cards are removed', () => {
    deck.forEach((card: PlayingCard) => card.removed = true);
    expect(service.checkWin(deck)).toBeTrue();
  });

  it('should remove matched cards', () => {
    const flippedCard = deck[0];
    flippedCard.isFaceUp = true;
    deck.forEach((card: PlayingCard) => {
      if (!card.isFaceUp && card.value === flippedCard.value) {
        card.isFaceUp = true;
      }
    });
    const checkedCards = service.checkCards(deck, flippedCard.value);
    const removedCards = checkedCards.filter((card: PlayingCard) => card.removed);
    expect(removedCards.length).toEqual(2);
  })
});
