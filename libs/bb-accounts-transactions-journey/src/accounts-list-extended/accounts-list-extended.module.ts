import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';
import { IconModule } from '@backbase/ui-ang';
import { ProductSummaryListWidgetModule } from '@backbase/product-summary-list-widget-ang';

import { AccountsListExtendedComponent } from './accounts-list-extended.component';

@NgModule({
  imports: [CommonModule, HeadingWidgetModule, IconModule, ProductSummaryListWidgetModule],
  declarations: [AccountsListExtendedComponent],
  exports: [AccountsListExtendedComponent],
})
export class AccountsListExtendedModule {}
