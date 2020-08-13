import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Output() dismiss: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.append(this.el.nativeElement);
  }

  onDismissClick() {
    this.dismiss.emit();
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
