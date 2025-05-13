import { CommonModule } from '@angular/common';
import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './input-list.component.html',
  styleUrl: './input-list.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class InputListComponent <T> {

  data = input.required<T[]>()
  displayFn = input.required<(item:T)=>string>()

  selected = output<T>()

  query = '';
  suggestions: T[] = [];


  onInputChange() {
    const lowerQuery = this.query.toLowerCase();
    this.suggestions = this.query
      ? this.data().filter(item =>
          this.displayFn()(item).toLowerCase().includes(lowerQuery)
        )
      : [];
  }

  selectSuggestion(suggestion: T) {
    this.query = this.displayFn()(suggestion);
    this.suggestions = [];
    this.selected.emit(suggestion);
  }
}
