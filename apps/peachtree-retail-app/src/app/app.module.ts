import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Widgets
import { ContainersModule } from '@backbase/universal-ang/containers';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';
import { ContentWidgetModule } from '@backbase/universal-ang/content';
import { ProductSummaryListWidgetModule } from '@backbase/product-summary-list-widget-ang';
import { MegaMenuNavigationContainerModule } from '@backbase/universal-ang/navigation';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import { ProductSummaryDetailsWidgetModule } from '@backbase/product-summary-details-widget-ang';
import { ProductSummaryAccountSelectorWidgetModule } from '@backbase/product-summary-account-selector-widget-ang';
import { UserContextMenuWidgetModule } from '@backbase/retail-ang/access-control';
import { NotificationsBadgeWidgetModule } from '@backbase/retail-ang/notifications';
import { PocketsModule } from '@peachtree/pockets';
import { PocketsFormModule } from '@peachtree/pockets-form';
import { PocketsDetailsModule } from '@peachtree/pockets-details';
import { UserManageProfileWidgetExtendedModule } from '@peachtree/user-manage-profile-widget-extended';
import { UserIdentitySecurityCenterWidgetExtendedModule } from '@peachtree/user-identity-security-center-widget-extended';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),

    // Widgets
    ContainersModule,
    LayoutContainerModule,
    HeadingWidgetModule,
    ProductSummaryListWidgetModule,
    MegaMenuNavigationContainerModule,
    ProductSummaryDetailsWidgetModule,
    TransactionsListWidgetModule,
    ProductSummaryAccountSelectorWidgetModule,
    UserContextMenuWidgetModule,
    NotificationsBadgeWidgetModule,
    ContentWidgetModule,
    PocketsModule,
    PocketsFormModule,
    PocketsDetailsModule,
    UserManageProfileWidgetExtendedModule,
    UserIdentitySecurityCenterWidgetExtendedModule,
  ],
  providers: [...(environment.mockProviders || [])],
  bootstrap: [AppComponent],
})
export class AppModule {}
