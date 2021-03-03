import { ChangeDetectorRef, Component, EventEmitter, NgZone, OnDestroy, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotificationService } from '@backbase/ui-ang';
import { PocketsService } from '@peachtree/pt-openapi';
import { Observable, of, Subject } from 'rxjs';
import { finalize, takeUntil, take, tap } from 'rxjs/operators';
import { PocketsFormService } from '../pockets-form.service';
import { ProductSummaryAccountsService } from '@backbase/product-summary-common-ang';
import { AccountArrangementItem } from '@backbase/data-ang/arrangements';

@Component({
  selector: 'pt-review-pocket',
  templateUrl: 'review-pocket.component.html',
})
export class ReviewPocketComponent implements OnDestroy {
  destroy$ = new Subject();
  @Output() next = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() back = new EventEmitter();
  @Output() showTac = new EventEmitter();

  loading = false;
  account$!: Observable<AccountArrangementItem>;

  constructor(
    private pocketsFormService: PocketsFormService,
    private notificationService: NotificationService,
    private PocketsService: PocketsService,
    private cd: ChangeDetectorRef,
    private productSummaryAccountsService: ProductSummaryAccountsService,
  ) {
    this.pocketsFormService.pocketForm$.pipe(take(1), takeUntil(this.destroy$)).subscribe((res) => {
      if (res.arrangementId) {
        this.account$ = this.productSummaryAccountsService.getAccountById(res.arrangementId);
      }
    });
  }

  pocketForm$ = this.pocketsFormService.pocketForm$;

  tac = new FormControl(undefined, Validators.required);

  openTac() {
    this.showTac.emit();
  }

  nextStep(pocketForm: any) {
    this.loading = true;
    this.PocketsService.pocketPost(pocketForm)
      .pipe(
        take(1),
        takeUntil(this.destroy$),
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        }),
      )
      .subscribe(
        () => {
          this.next.emit();
        },
        () => {
          this.showFailCreateNotification();
        },
      );
  }
  previousStep() {
    this.back.emit();
  }
  cancelForm() {
    this.cancel.emit();
  }

  showFailCreateNotification() {
    this.notificationService.showNotification({
      header: 'Failed To Create Pocket',
      message: 'Please try again',
      modifier: 'error',
      dismissible: true,
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
