import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoryGameService } from '../memory-game.service';
import { PlayingCard } from '../playing-card/playing-card.component';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let cardDeckSpy;
  let matchingCardA1 = <PlayingCard>{ value: 'A' };
  let matchingCardA2 = <PlayingCard>{ value: 'A' };
  let matchingCardB1 = <PlayingCard>{ value: 'B' };
  let matchingCardB2 = <PlayingCard>{ value: 'B' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    cardDeckSpy = jasmine.createSpyObj('MemoryGameService', {
      'getNewCardDeck': <PlayingCard[]>[
        matchingCardA1,
        matchingCardA2,
        matchingCardB1,
        matchingCardB2,
      ],
    });
    TestBed.configureTestingModule({
      providers: [
        { provide: MemoryGameService, useValue: cardDeckSpy }
      ]
    });
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card deck generated', () => {
    expect(component.cards).toBeTruthy();
  });

  it('should not have win yet', () => {
    expect(component.isWin).toBeFalsy();
  });
});
