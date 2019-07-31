import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name = 'A.Ganeshsurya';
  date = new Date();
  person = {
    "firstName": "A.Ganesh",
    "lastName": "surya"
  };
  number = '123456789';

  power ="";
  factor="";
}
