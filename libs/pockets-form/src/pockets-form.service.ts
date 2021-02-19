import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pocket } from './pocket.interface';

@Injectable()
export class PocketsFormService {
  private pocketFormSubject$: BehaviorSubject<Pocket> = new BehaviorSubject<Pocket>({ name: '' });
  readonly pocketForm$: Observable<Pocket> = this.pocketFormSubject$.asObservable();

  clearForm() {
    this.pocketFormSubject$.next({ name: '' });
  }

  setForm(data: any) {
    const currentData = this.pocketFormSubject$.value;
    this.pocketFormSubject$.next({ ...currentData, ...data });
  }
}
