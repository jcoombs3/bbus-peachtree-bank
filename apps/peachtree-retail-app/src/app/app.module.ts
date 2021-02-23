import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { MegaMenuNavigationContainerModule } from '@backbase/universal-ang/navigation';
import { bundlesDefinition } from './bundles-definition';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
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
  ],
  providers: [...(environment.mockProviders || [])],
  bootstrap: [AppComponent],
})
export class AppModule {}
