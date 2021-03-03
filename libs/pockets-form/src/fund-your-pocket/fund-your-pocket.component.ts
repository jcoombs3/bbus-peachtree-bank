import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { PocketsFormService } from '../pockets-form.service';
import { PocketPostRequestBody } from '@peachtree/pt-openapi';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pt-fund-your-pocket',
  templateUrl: 'fund-your-pocket.component.html',
})
export class FundYourPocketComponent implements OnInit, OnDestroy {
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() back = new EventEmitter();

  amount = new FormControl({
    amount: '',
    currency: 'USD',
  });

  selectedAccount: any = undefined;

  arrangementId: any = undefined;

  constructor(private pocketsFormService: PocketsFormService, private router: Router, private route: ActivatedRoute) {}
  destroy$ = new Subject();

  ngOnInit() {
    this.pocketsFormService.pocketForm$
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe((pocket: PocketPostRequestBody) => {
        if (pocket.fundAmount) {
          this.amount.value.amount = pocket.fundAmount.amount;
          this.amount.value.currency = pocket.fundAmount.currency;
        }
        // if (pocket.arrangementId) {
        //   this.selectedAccount = pocket.arrangementId;
        // }
      });
  }

  onChange(selectedAccount: string) {
    this.router.navigate([{ selectedAccount }], { relativeTo: this.route });
    this.arrangementId = {
      arrangementId: {
        arrangementId: selectedAccount,
      },
    };
  }

  nextStep() {
    const fundAmount = { fundAmount: this.amount.value };
    this.pocketsFormService.setForm(fundAmount);
    this.pocketsFormService.setForm(this.arrangementId);
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
