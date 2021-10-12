import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// OOTB
import {
  AccountsTransactionsJourneyModule,
  AccountsTransactionsJourneyComponent,
  AccountsListComponent,
  AccountsManageComponent,
  AccountsManageGuardService,
  AccountsDetailsTabComponent,
  TransactionsListComponent,
  TransactionDetailsComponent,
  AccountsDetailsComponent,
} from '@backbase/accounts-transactions-journey-ang';

// Views
import { AccountsListExtendedComponent } from './accounts-list-extended/accounts-list-extended.component';

// Modules
import { AccountsListExtendedModule } from './accounts-list-extended/accounts-list-extended.module';

const extendedRoute = {
  path: '',
  component: AccountsTransactionsJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: AccountsListExtendedComponent,
      data: { title: 'My Accounts' },
    },
    {
      path: 'manage',
      component: AccountsManageComponent,
      canActivate: [AccountsManageGuardService],
    },
    {
      path: 'transactions',
      component: AccountsDetailsTabComponent,
      data: { title: 'Transactions' },
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'list',
          component: TransactionsListComponent,
          data: { title: 'Transactions' },
          children: [
            {
              path: 'detail',
              component: TransactionDetailsComponent,
            },
          ],
        },
        {
          path: 'details',
          component: AccountsDetailsComponent,
          data: { title: 'Details' },
        },
      ],
    },
  ],
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountsListExtendedModule,
    AccountsTransactionsJourneyModule.forRoot({ route: extendedRoute }),
  ],
})
export class BbAccountsTransactionsJourneyModule {}
