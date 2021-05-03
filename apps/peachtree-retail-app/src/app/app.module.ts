import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Required universal-ang
import { ContainersModule } from '@backbase/universal-ang/containers';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { MegaMenuNavigationContainerModule } from '@backbase/universal-ang/navigation';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';

// Lazy Loading Bundles
import { bundlesDefinition } from './bundles-definition';

// Open API module
import { PtOpenapiModule } from '@peachtree/pt-openapi';
import { AccountsTransactionsJourneyModule } from '@backbase/accounts-transactions-journey-ang';
import { basePathProviders } from './base-path';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      lazyModules: bundlesDefinition,
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ContainersModule,
    LayoutContainerModule,
    MegaMenuNavigationContainerModule,
    HeadingWidgetModule,
    PtOpenapiModule,
    AccountsTransactionsJourneyModule,
  ],
  providers: [...(environment.mockProviders || []), basePathProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
