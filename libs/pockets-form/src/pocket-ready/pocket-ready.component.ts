import { Component, EventEmitter, Output } from '@angular/core';
import { PocketsFormService } from '../pockets-form.service';

@Component({
  selector: 'pt-pocket-ready',
  templateUrl: 'pocket-ready.component.html',
})
export class PocketReadyComponent {
  @Output() viewPocket = new EventEmitter();

  constructor(private pocketsFormService: PocketsFormService) {}

  pocketForm$ = this.pocketsFormService.pocketForm$;

  onViewPocket() {
    this.viewPocket.emit();
  }
}
