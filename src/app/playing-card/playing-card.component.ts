import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export class PlayingCard {
  public isFaceUp: boolean;
  public value: string;
  public row: string;
  public column: number;
  public removed: boolean;
}

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit, OnChanges {
  public imagePath: string;
  @Input() public card: PlayingCard;
  @Input() public readOnly: boolean;

  @Output() public flipped: EventEmitter<PlayingCard>;
  @Output() public disabled: EventEmitter<void>;

  constructor() {
    this.flipped = new EventEmitter<PlayingCard>();
    this.disabled = new EventEmitter<void>();
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['card']) {
      this.imagePath = `assets\\images\\${this.card.value}.png`
    }
  }

  public flip(): void {
    if (!this.readOnly) {
      this.disabled.next();
      this.card.isFaceUp = !this.card.isFaceUp;
    }
  }

  public emitFlip(): void {
    this.flipped.next(this.card);
  }
}
