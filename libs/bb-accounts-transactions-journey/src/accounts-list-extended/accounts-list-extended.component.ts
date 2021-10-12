import { Component, OnInit } from '@angular/core';
import { AccountsListComponent } from '@backbase/accounts-transactions-journey-ang';

@Component({
  selector: 'bb-accounts-list-extended-view',
  templateUrl: './accounts-list-extended.component.html',
})
export class AccountsListExtendedComponent extends AccountsListComponent {}
