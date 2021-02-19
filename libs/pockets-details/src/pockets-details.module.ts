import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsDetailsComponent } from './pockets-details.component';

@NgModule({
  declarations: [PocketsDetailsComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsDetailsComponent }
    })
  ]
})
export class PocketsDetailsModule { }