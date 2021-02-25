import { Provider } from '@angular/core';
import {
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
} from '@backbase/accounts-transactions-journey-ang';

export const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
    showCheckImages: true,
    maskIndicator: true,
    enableTransferButton: false,
    enableManageAccounts: false,
  },
};
