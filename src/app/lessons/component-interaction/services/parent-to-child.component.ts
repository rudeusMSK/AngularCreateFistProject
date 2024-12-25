import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Hero } from './hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-to-child',
  imports: [CommonModule],
  template: `
    <h1 class="">{{hero.name}} :</h1>
    <h2>tôi là {{hero.name}}, năng lực của tôi là {{hero.power}}.</h2>
    <br>
  `
})
export class ParentToChildComponent   {
  @Input() hero!: Hero; // ! để biến hero khác null hoặc undifine nhưng đảm bảo hero pải có giá trị nếu ko sẽ báo lỗi.
  @Input('master') masterName = 'Phòng trọ Happy ';
}