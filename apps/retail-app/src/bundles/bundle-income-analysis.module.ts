import { NgModule } from '@angular/core';
import { IncomeSpendingAnalysisJourneyModule } from '@backbase/income-spending-analysis-journey-ang';
import { IncomeAnalysisConfigProvider } from '../app/config.providers';

@NgModule({
  imports: [IncomeSpendingAnalysisJourneyModule.forRoot()],
  providers: [IncomeAnalysisConfigProvider],
})
export class IncomeAnalysisBundleModule {}
