import { Component } from '@angular/core';
import { VoterComponent } from "./voter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <button (click)="voter.vote(false)"> nhấn thử </button>
   
   <app-voter #voter
   (voted)="onVoted($event)"
   ></app-voter>
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)">
    </app-voter>
  `,
  imports: [VoterComponent,CommonModule]
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}