import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { PocketsFormComponent } from './pockets-form.component';
import {
  StepperModule,
  HeaderModule,
  InputTextModule,
  ButtonModule,
  CurrencyInputModule,
  AccountSelectorModule,
  IconModule,
  InputCheckboxModule,
  ModalModule,
  AmountModule,
  NotificationModule,
} from '@backbase/ui-ang';
import { PocketsStepperComponent } from './pocket-stepper/pockets-stepper.component';
import { MakeItYoursComponent } from './make-it-yours/make-it-yours.component';
import { SetYourGoalComponent } from './set-your-goal/set-your-goal.component';
import { FundYourPocketComponent } from './fund-your-pocket/fund-your-pocket.component';
import { ReviewPocketComponent } from './review-pocket/review-pocket.component';
import { TacComponent } from './tac/tac.component';
import { PocketReadyComponent } from './pocket-ready/pocket-ready.component';
import { PocketsFormService } from './pockets-form.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PocketsFormComponent,
    PocketsStepperComponent,
    MakeItYoursComponent,
    SetYourGoalComponent,
    FundYourPocketComponent,
    ReviewPocketComponent,
    TacComponent,
    PocketReadyComponent,
  ],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { PocketsFormComponent },
    }),
    StepperModule,
    HeaderModule,
    InputTextModule,
    ButtonModule,
    CurrencyInputModule,
    AccountSelectorModule,
    IconModule,
    InputCheckboxModule,
    ModalModule,
    ReactiveFormsModule,
    AmountModule,
    NotificationModule,
  ],
  providers: [PocketsFormService],
})
export class PocketsFormModule {}
