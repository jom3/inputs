import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputListComponent } from './components/input-list/input-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pruebas-app';
  cities: string[] = [
    'Bogotá',
    'Buenos Aires',
    'Madrid',
    'Ciudad de México',
    'Lima',
    'Montevideo',
    'Quito',
    'Santiago',
    'Caracas',
  ];
}
