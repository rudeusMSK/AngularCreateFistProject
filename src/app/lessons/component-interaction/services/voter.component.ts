import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-voter',
  imports: [CommonModule],
  template: `
    <h4>{{name}}</h4>
    <button type="button" (click)="vote(true)"  [disabled]="didVoteTrue">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVoteFlase">Disagree</button>
  `
})
export class VoterComponent {
  @Input()  name = '';
  @Output() voted = new EventEmitter<boolean>();
  didVoteTrue = false;
  didVoteFlase = false;

  vote(agreed: boolean) {
    console.log(agreed)
    if(agreed){
      this.didVoteTrue = true;
    } 
    else{ this.didVoteFlase = true; }

    this.voted.emit(agreed);
   // this.didVote = true;
  }
}