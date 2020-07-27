import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = '';
  userInput: string = '';

  constructor() {
    this.text = lorem.sentence();
  }

  onHandleInput(value: string) {
    this.userInput = value;
  }

  onCompare(letter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'pending';
    }

    return letter === inputLetter ? 'correct' : 'incorrect';
  }

  onHandleClick() {
    this.text = lorem.sentence();
    this.userInput = '';
  }
}
