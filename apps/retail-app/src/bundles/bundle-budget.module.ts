import { NgModule } from '@angular/core';
import { BudgetJourneyModule } from '@backbase/budget-journey-ang';
import { BudgetConfigProvider } from '../app/config.providers';

@NgModule({
  imports: [BudgetJourneyModule.forRoot()],
  providers: [BudgetConfigProvider],
})
export class BudgetJourneyBundleModule {}
