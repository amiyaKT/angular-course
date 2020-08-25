import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  progress: number;
}

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html',
  styleUrls: ['./stop-training.component.css'],
})
export class StopTrainingComponent implements OnInit {
  progress: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.progress = this.data.progress;
  }

  ngOnInit(): void {}
}
