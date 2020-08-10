import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { filter, debounce, scan } from 'rxjs/operators';

import { MathValidators } from '../math-validators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      ans: new FormControl(''),
    },
    [MathValidators.addition('ans', 'a', 'b')]
  );
  secondsPerSolution: number = 0;

  constructor() {}

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
    this.mathForm.statusChanges
      .pipe(
        debounce(() => interval(500)),
        filter((value) => value === 'VALID'),
        scan(
          (acc) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          ans: '',
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
