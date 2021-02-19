import { Component, Input } from '@angular/core';

@Component({
  selector: 'pt-pockets-stepper',
  templateUrl: 'pockets-stepper.component.html',
})
export class PocketsStepperComponent {
  @Input() currentStep = 1;
}
