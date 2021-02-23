// apps/peachtree-retail-app/src/bundles/bundle-1.ts
import { NgModule } from '@angular/core';

import { ProductSummaryAccountSelectorWidgetModule} from '@backbase/product-summary-account-selector-widget-ang';
import { ProductSummaryDetailsWidgetModule} from '@backbase/product-summary-details-widget-ang';
import { ProductSummaryListWidgetModule} from '@backbase/product-summary-list-widget-ang';
import { UserContextMenuWidgetModule} from '@backbase/retail-ang/access-control';
import { NotificationsBadgeWidgetModule} from '@backbase/retail-ang/notifications';
import { TransactionsListWidgetModule} from '@backbase/retail-ang/transactions';
import { ContentWidgetModule} from '@backbase/universal-ang/content';

@NgModule({
  imports: [ContentWidgetModule, NotificationsBadgeWidgetModule, UserContextMenuWidgetModule, ProductSummaryListWidgetModule, ProductSummaryAccountSelectorWidgetModule, TransactionsListWidgetModule, ProductSummaryDetailsWidgetModule],
})
export class Bundle1Module {}
