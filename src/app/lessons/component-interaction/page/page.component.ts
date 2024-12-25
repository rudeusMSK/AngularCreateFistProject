import { Component } from '@angular/core';
import { ComponentParentComponent } from "../services/component-parent.component";
import { VersionParentComponent } from "../../../version-parent/version-parent.component";
import { CommonModule } from '@angular/common';
import { NameParentComponent } from '../services/name-parent.component';
import { VoteTakerComponent } from "../services/votetaker.component";
import { CountdownLocalVarParentComponent } from "../services/countdown-parent.component";

@Component({
  selector: 'app-page',
  imports: [
    CommonModule,
    ComponentParentComponent,
    VersionParentComponent,
    NameParentComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent
],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
