import { Component } from '@angular/core';

@Component({
  selector: 'app-bnt-click',
  imports: [],
  templateUrl: './bnt-click.component.html',
  styleUrl: './bnt-click.component.scss'
})
export class BntClickComponent {
  public major: number = 1; 
  public minor: number = 0;  
  
  newMinor() {
    alert('nut da duoc lick');
  }

  newMajor() {
    this.major++;
  }
}
