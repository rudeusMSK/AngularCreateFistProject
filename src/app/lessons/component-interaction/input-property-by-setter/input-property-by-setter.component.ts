import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property-by-setter',
  imports: [CommonModule],
  templateUrl: './input-property-by-setter.component.html',
  styleUrl: './input-property-by-setter.component.scss'
})
export class InputPropertyBySetterComponent {
@Input()
get name(): string {return this._name;}
set name(name: string) {this._name = (name && name.trim()) || '<no name set>';}

private _name = '';
}
