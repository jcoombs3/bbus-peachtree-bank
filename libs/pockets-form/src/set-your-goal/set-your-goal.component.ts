import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { Pocket } from '../pocket.interface';
import { PocketsFormService } from '../pockets-form.service';

@Component({
  selector: 'pt-set-your-goal',
  templateUrl: 'set-your-goal.component.html',
})
export class SetYourGoalComponent implements OnInit, OnDestroy {
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() back = new EventEmitter();

  destroy$ = new Subject();

  amount = new FormControl({
    amount: '',
    currency: 'USD',
  });

  constructor(private pocketsFormService: PocketsFormService) {}

  ngOnInit() {
    this.pocketsFormService.pocketForm$.pipe(take(1), takeUntil(this.destroy$)).subscribe((data: Pocket) => {
      if (data.goal) {
        this.amount.value.amount = data.goal.amount;
        this.amount.value.currency = data.goal.currency;
      }
    });
  }

  nextStep() {
    const goal = { goal: this.amount.value };
    this.pocketsFormService.setForm(goal);
    this.next.emit();
  }
  previousStep() {
    this.back.emit();
  }
  cancelForm() {
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
