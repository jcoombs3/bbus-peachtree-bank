import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PocketPostRequestBody } from '@peachtree/pt-openapi';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PocketsFormService } from '../pockets-form.service';

@Component({
  selector: 'pt-make-it-yours',
  templateUrl: 'make-it-yours.component.html',
})
export class MakeItYoursComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();

  pocketForm: FormGroup = new FormGroup({
    name: new FormControl(Validators.required),
  });

  constructor(private pocketsFormSercive: PocketsFormService) {}

  ngOnInit(): void {
    this.pocketsFormSercive.pocketForm$
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((pocket: PocketPostRequestBody) => {
        this.pocketForm.controls.name.setValue(pocket.name);
      });
  }

  nextStep() {
    this.pocketsFormSercive.setForm(this.pocketForm.value);
    this.next.emit();
  }
  cancelForm() {
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
