import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PocketsFormService } from './pockets-form.service';

@Component({
  selector: 'pt-pockets-form',
  templateUrl: 'pockets-form.component.html',
  styles: [],
})
export class PocketsFormComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  showTac = false;
  currentStep = 1;
  constructor(private pocketsFormSerivce: PocketsFormService) {
    this.pocketsFormSerivce.clearForm();
  }

  ngOnInit(): void {}

  closeTac() {
    this.showTac = false;
  }

  openTac() {
    this.showTac = true;
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  cancelForm() {
    this.cancel.emit();
  }
}
