import { NgModule } from '@angular/core';
import { BbAccountsTransactionsJourneyModule } from '@backbase/bb-accounts-transactions-journey';
import { AccountsTransactionsConfigProvider } from '../app/config.providers';

@NgModule({
  imports: [BbAccountsTransactionsJourneyModule],
  providers: [AccountsTransactionsConfigProvider],
})
export class AccountsTransactionsJourneyBundleModule {}
