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
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }
}
