import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsDetailsComponent } from './pockets-details.component';
import { BbDatePipeModule } from '@backbase/ui-ang';
import { ButtonModule, IconModule, ModalModule } from '@backbase/ui-ang';
import { PocketsService } from '@peachtree/pt-openapi';
import { LoadingIndicatorModule } from '@backbase/ui-ang';

@NgModule({
  declarations: [PocketsDetailsComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsDetailsComponent },
    }),
    ButtonModule,
    IconModule,
    ModalModule,
    BbDatePipeModule,
    LoadingIndicatorModule,
  ],
  providers: [PocketsService],
})
export class PocketsDetailsModule {}
