import { Injectable } from '@angular/core';
import { PocketPostRequestBody } from '@peachtree/pt-openapi';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PocketsFormService {
  private pocketFormSubject$: BehaviorSubject<PocketPostRequestBody> = new BehaviorSubject<PocketPostRequestBody>({
    name: '',
  });
  readonly pocketForm$: Observable<PocketPostRequestBody> = this.pocketFormSubject$.asObservable();

  clearForm() {
    this.pocketFormSubject$.next({ name: '' });
  }

  setForm(data: any) {
    const currentData = this.pocketFormSubject$.value;
    this.pocketFormSubject$.next({ ...currentData, ...data });
  }
}
