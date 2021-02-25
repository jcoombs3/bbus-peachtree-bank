import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotificationService } from '@backbase/ui-ang';
import { Subject } from 'rxjs';
import { PocketsFormService } from '../pockets-form.service';

@Component({
  selector: 'pt-review-pocket',
  templateUrl: 'review-pocket.component.html',
})
export class ReviewPocketComponent {
  destroy$ = new Subject();
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() back = new EventEmitter();
  @Output() showTac = new EventEmitter();

  notificationDemoCounter = 0;

  constructor(private pocketsFormService: PocketsFormService, private notificationService: NotificationService) {}

  pocketForm$ = this.pocketsFormService.pocketForm$;

  tac = new FormControl(undefined, Validators.required);

  openTac() {
    this.showTac.emit();
  }

  nextStep() {
    if (this.notificationDemoCounter === 0) {
      this.showFailTransferlNotification();
    }
    if (this.notificationDemoCounter === 1) {
      this.showFailCreateNotification();
    }
    if (this.notificationDemoCounter === 2) {
      this.next.emit();
    }
    this.notificationDemoCounter++;
  }
  previousStep() {
    this.back.emit();
  }
  cancelForm() {
    this.cancel.emit();
  }

  showFailTransferlNotification() {
    this.notificationService.showNotification({
      header: 'Failed To Transfer Money',
      message: 'Please try again',
      modifier: 'error',
      dismissible: true,
    });
  }

  showFailCreateNotification() {
    this.notificationService.showNotification({
      header: 'Failed To Create Pocket',
      message: 'Please try again',
      modifier: 'error',
      dismissible: true,
    });
  }
}
