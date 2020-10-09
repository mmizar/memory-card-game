import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingCard, PlayingCardComponent } from './playing-card.component';

describe('PlayingCardComponent', () => {
  let component: PlayingCardComponent;
  let fixture: ComponentFixture<PlayingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingCardComponent);
    component = fixture.componentInstance;
    component.card = <PlayingCard>{
      isFaceUp: false,
      row: 'A',
      column: 1,
      value: 'TEST',
      removed: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be face down', () => {
    expect(component.card.isFaceUp).toBeFalse();
  });

  it('should be flipped face up', () => {
    component.flip();
    expect(component.card.isFaceUp).toBeTrue();
  });
});
