import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PocketsFormService } from '../pockets-form.service';
import { accounts } from './mock-accounts';
import { Pocket } from '../pocket.interface';

@Component({
  selector: 'pt-fund-your-pocket',
  templateUrl: 'fund-your-pocket.component.html',
})
export class FundYourPocketComponent implements OnInit {
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() back = new EventEmitter();

  items = accounts;

  amount = new FormControl({
    amount: '',
    currency: 'USD',
  });

  selectedAccount: any = null;

  account: any = null;

  constructor(private pocketsFormService: PocketsFormService) {}
  destroy$ = new Subject();

  ngOnInit() {
    this.pocketsFormService.pocketForm$.pipe(take(1), takeUntil(this.destroy$)).subscribe((data: Pocket) => {
      if (data.fundAmount) {
        this.amount.value.amount = data.fundAmount.amount;
        this.amount.value.currency = data.fundAmount.currency;
      }
      if (data.account) {
        this.selectedAccount = data.account;
      }
    });
  }

  onChange($event: any) {
    const count = Array.isArray($event) ? $event.length : $event ? 1 : 0;
    this.account = {
      account: {
        id: $event.id,
        name: $event.name,
        number: $event.number,
        availableBalance: $event.availableBalance,
      },
    };
    console.log(this.account);
  }

  nextStep() {
    const fundAmount = { fundAmount: this.amount.value };
    this.pocketsFormService.setForm(fundAmount);
    this.pocketsFormService.setForm(this.account);
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
