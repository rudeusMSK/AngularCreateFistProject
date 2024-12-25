import { Component } from '@angular/core';
import { InputPropertyBySetterComponent } from "./input-property-by-setter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-parent',
  imports: [
    InputPropertyBySetterComponent,
    CommonModule
  ],
  template: `
<p>name-parent works!</p>
<h2>Master controls {{names.length}} names</h2>

<app-input-property-by-setter 
*ngFor="let name of names" 
[name]="name"
></app-input-property-by-setter>  
  `
})
export class NameParentComponent {
  // Displays 'Dr. IQ', '<no name set>', 'Bombasto'
  names = ['Dr. IQ', '   ', '  Bombasto  '];
}


