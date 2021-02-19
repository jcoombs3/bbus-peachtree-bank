import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsComponent } from './pockets.component';

@NgModule({
  declarations: [PocketsComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsComponent }
    })
  ]
})
export class PocketsModule { }