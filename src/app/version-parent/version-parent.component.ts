import { Component, OnInit } from '@angular/core';
import { VersionChildComponent } from "../version-child/version-child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version-parent',
  imports: [VersionChildComponent, CommonModule],
  template: `
  <section class="banner-area" id="home">	
    <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-start">
<section class="banner">
    <button type="button" (click)="newMinor()">New minor version</button>
    <button type="button" (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
            
</section>
</div>
</div>
</section>
  `,
  styleUrl: './version-parent.component.scss'
})
export class VersionParentComponent{

  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
  
}
