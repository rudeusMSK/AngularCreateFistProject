import { Component } from '@angular/core';
import { InputPropertyBySetterComponent } from "../input-property-by-setter/input-property-by-setter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-parent',
  imports: [InputPropertyBySetterComponent,CommonModule],
  templateUrl: './name-parent.component.html',
  styleUrl: './name-parent.component.scss'
})
export class NameParentComponent {
  // Displays 'Dr. IQ', '<no name set>', 'Bombasto'
  names = ['Dr. IQ', '   ', '  Bombasto  '];

  newMinor(){
    console.log('sự kiện lick được kích hoạt.');
  }
}


