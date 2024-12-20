import { Component } from '@angular/core';
import { ComponentParentComponent } from "../component-parent.component";
import { VersionParentComponent } from "../../../version-parent/version-parent.component";
import { CommonModule } from '@angular/common';
import { NameParentComponent } from '../name-parent.component';

@Component({
  selector: 'app-page',
  imports: [
    CommonModule,
    ComponentParentComponent,
    VersionParentComponent,
    NameParentComponent
],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
