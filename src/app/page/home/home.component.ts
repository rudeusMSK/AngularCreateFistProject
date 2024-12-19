import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
name = 'RudeusMSK';

updateUser() {
  this.name = 'Huỳnh Thiện Thệ'
}
}
