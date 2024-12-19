import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Hero } from '../services/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-to-child',
  imports: [CommonModule],
  templateUrl: `./parent-to-child.component.html`,
  //encapsulation: ViewEncapsulation.Emulated
  
})
export class ParentToChildComponent   {
  @Input() hero!: Hero; // ! để biến hero khác null hoặc undifine nhưng đảm bảo hero pải có giá trị nếu ko sẽ báo lỗi.
  @Input('master') masterName = 'Phòng trọ Happy ';
}