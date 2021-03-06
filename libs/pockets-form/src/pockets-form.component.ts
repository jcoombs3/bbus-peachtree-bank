import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private pocketsFormSerivce: PocketsFormService, private router: Router) {
    this.pocketsFormSerivce.clearForm();
  }

  ngOnInit(): void {
    this.router.navigate(['/pockets/form']);
  }

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
