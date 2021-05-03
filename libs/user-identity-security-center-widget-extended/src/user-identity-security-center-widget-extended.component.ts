import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ManageProfilePreferencesService, UserDataService } from '@backbase/user-common';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

/* tslint:disable */
function lowerCase(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      return /.*[a-z].*/.test(control.value) ? null : { lowerCase: control.value };
    } else {
      return null;
    }
  };
}

function upperCase(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /.*[A-Z].*/.test(control.value) ? null : { upperCase: control.value };
}

function digit(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    /.*\d.*/.test(control.value) ? null : { digit: control.value };
}
/* tslint:enable */

@Component({
  selector: 'pt-user-identity-security-center-widget-extended',
  templateUrl: 'user-identity-security-center-widget-extended.component.html',
  styles: [],
  providers: [ManageProfilePreferencesService, UserDataService],
})
export class UserIdentitySecurityCenterWidgetExtendedComponent implements OnDestroy {
  private formSubject$ = new BehaviorSubject<FormGroup | null>(null);
  formSubscription!: Subscription;

  getForm(hostForm: FormGroup) {
    if (!this.formSubject$.value) {
      this.formSubject$.next(hostForm);
      this.formSubscription = this.formSubject$
        .pipe(
          take(1),
          tap((form) => {
            console.log('hello');
            if (form)
              form.controls.inputNewPassword.setValidators([
                Validators.minLength(6),
                lowerCase(),
                digit(),
                upperCase(),
              ]);
          }),
        )
        .subscribe();
    }
  }

  reset() {
    this.formSubject$.next(null);
    this.formSubscription.unsubscribe();
  }

  ngOnDestroy() {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
}
