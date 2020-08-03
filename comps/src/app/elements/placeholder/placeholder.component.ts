import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() header: boolean = true;
  @Input() lines: number = 5;

  constructor() {}

  ngOnInit(): void {}
}
