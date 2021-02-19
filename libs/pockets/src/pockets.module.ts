import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsComponent } from './pockets.component';
import { PocketsListComponent } from './pockets-list/pockets-list.component';
import { ButtonModule, IconModule, ModalModule } from '@backbase/ui-ang';

@NgModule({
  declarations: [PocketsComponent, PocketsListComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsComponent },
    }),
    ButtonModule,
    IconModule,
    ModalModule,
  ],
})
export class PocketsModule {}
