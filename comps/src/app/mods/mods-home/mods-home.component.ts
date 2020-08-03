import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    {
      title: 'Why is the sky blue',
      content: 'Because it is blue!',
    },
    {
      title: 'How does an orange taste like ?',
      content: 'Orange tastes sour.',
    },
    {
      title: 'What is the color of the cat ?',
      content: 'The color of cat is orange.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
