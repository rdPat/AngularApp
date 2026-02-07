import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {

  @Input() avatar!:string;
  
  @Input() name!:string;

  get imagePath()
  {
    return 'assets/users/'+this.avatar;
  }
  onSelectedUser()
  {}

}
