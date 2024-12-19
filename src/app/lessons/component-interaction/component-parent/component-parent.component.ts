import { Component, ViewEncapsulation } from '@angular/core';
import { HEROES } from '../services/hero';
import { ParentToChildComponent } from "../parent-to-child/parent-to-child.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component-parent',
  templateUrl: `./component-parent.component.html`,
imports: [CommonModule, ParentToChildComponent],
encapsulation: ViewEncapsulation.Emulated
})

export class ComponentParentComponent {
  heroes = HEROES; // mảng HEROES => sử dụng ở view để truyển dữ liệu cho component con.
  master = 'Phòng trọ happy';
}
