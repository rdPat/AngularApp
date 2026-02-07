import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { CityComponent } from "./city/city/city.component";
import { DUMMY_CITY } from './dummy-city';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users=DUMMY_USERS;
  city=DUMMY_CITY;
}
