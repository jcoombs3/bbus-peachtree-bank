import { NgModule } from '@angular/core';
import { AccountsTransactionsJourneyModule } from '@backbase/accounts-transactions-journey-ang';
import { AccountsTransactionsConfigProvider } from '../app/config.providers';

@NgModule({
  imports: [AccountsTransactionsJourneyModule.forRoot()],
  providers: [AccountsTransactionsConfigProvider],
})
export class AccountsTransactionsJourneyBundleModule {}
