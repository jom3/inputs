import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputListComponent } from './components/input-list/input-list.component';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputListComponent, NgStyle, NgIf],
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

  contextMenuVisible = false;
contextMenuPosition = { x: 0, y: 0 };

openContextMenu(event: MouseEvent) {
  event.preventDefault(); // previene el menú por defecto del navegador
  this.contextMenuPosition = { x: event.clientX, y: event.clientY };
  this.contextMenuVisible = true;
}

closeContextMenu() {
  this.contextMenuVisible = false;
}

accion(opcion: string) {
  console.log('Elegiste:', opcion);
  this.closeContextMenu();
}

}
