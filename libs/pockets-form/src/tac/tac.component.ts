import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pt-tac',
  templateUrl: 'tac.component.html',
  styles: [],
})
export class TacComponent {
  @Input() showDialog = true;
  @Output() dialogClosed = new EventEmitter();

  closeDialog() {
    this.dialogClosed.emit();
  }
}
