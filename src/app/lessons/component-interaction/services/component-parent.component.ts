import { Component, ViewEncapsulation } from '@angular/core';
import { HEROES } from './hero';
import { ParentToChildComponent } from "./parent-to-child.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-component-parent',
  template: `
<section class="banner-area" id="home">	
    <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-start">
<section class="banner">


<app-parent-to-child
*ngFor="let hero of heroes"
[hero]="hero"
[master]="master">
</app-parent-to-child>
</section>
</div>
</div>
</section>
  `,
imports: [CommonModule, ParentToChildComponent],
encapsulation: ViewEncapsulation.Emulated
})

export class ComponentParentComponent {
  heroes = HEROES; // mảng HEROES => sử dụng ở view để truyển dữ liệu cho component con.
  master = 'Phòng trọ happy';
}
