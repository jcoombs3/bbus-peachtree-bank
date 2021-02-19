import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsFormComponent } from './pockets-form.component';

@NgModule({
  declarations: [PocketsFormComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsFormComponent }
    })
  ]
})
export class PocketsFormModule { }