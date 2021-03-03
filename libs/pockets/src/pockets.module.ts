import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsComponent } from './pockets.component';
import { PocketsListComponent } from './pockets-list/pockets-list.component';
import { ButtonModule, IconModule, LoadingIndicatorModule, ModalModule } from '@backbase/ui-ang';
import { PocketsService } from '@peachtree/pt-openapi';

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
    LoadingIndicatorModule,
  ],
  providers: [PocketsService],
})
export class PocketsModule {}
