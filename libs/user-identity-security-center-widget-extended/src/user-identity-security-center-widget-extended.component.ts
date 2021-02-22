import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ManageProfilePreferencesService, UserDataService } from '@backbase/user-common';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

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

@Component({
  selector: 'pt-user-identity-security-center-widget-extended',
  templateUrl: 'user-identity-security-center-widget-extended.component.html',
  styles: [],
  providers: [ManageProfilePreferencesService, UserDataService],
})
export class UserIdentitySecurityCenterWidgetExtendedComponent implements OnInit, OnDestroy {
  constructor() {}

  private formSubject = new BehaviorSubject<any>(null);
  form!: Subscription;

  ngOnInit(): void {}

  getForm(form: FormGroup) {
    this.formSubject.next(form);
    this.form = this.formSubject.pipe(take(1)).subscribe((form) => {
      form.controls.inputNewPassword.setValidators([Validators.minLength(6), lowerCase(), digit(), upperCase()]);
    });
  }

  reset() {
    this.form.unsubscribe();
  }

  ngOnDestroy() {
    if (this.form) {
      this.form.unsubscribe();
    }
  }
}
