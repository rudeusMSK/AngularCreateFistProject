import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property-by-setter',
  imports: [CommonModule],
  template: `
    <p>input-property-by-setter works!</p>
    <h3>"{{name}}"</h3>
  `
})
export class InputPropertyBySetterComponent {
@Input()
get name(): string {return this._name;}
set name(name: string) {this._name = (name && name.trim()) || '<no name set>';}

private _name = '';
}
