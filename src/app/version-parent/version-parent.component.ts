import { Component, OnInit } from '@angular/core';
import { VersionChildComponent } from "../version-child/version-child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-version-parent',
  imports: [VersionChildComponent, CommonModule],
  templateUrl: './version-parent.component.html',
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
