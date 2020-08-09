import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() mask: string;
  id: string = '';

  constructor() {}

  ngOnInit(): void {
    this.label
      .toLowerCase()
      .split(' ')
      .forEach((letter, index) => {
        letter = letter.replace(/ *\([^)]*\) */g, '');
        this.id +=
          index !== 0
            ? letter
                .split('')
                .map((value, index) =>
                  index === 0 ? value.toUpperCase() : value
                )
                .join('')
            : letter;
      });
  }

  showError() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
