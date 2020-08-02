import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: String = '';
  date: String = '';
  amount: number;
  height: number;
  miles: number;

  onNameChange(value: String) {
    this.name = value;
  }

  onDateChange(value: String) {
    this.date = value;
  }

  onAmountChange(value: number) {
    this.amount = value;
  }

  onHeightChange(value: number) {
    this.height = value;
  }

  onMilesChange(value: number) {
    this.miles = value;
  }
}
