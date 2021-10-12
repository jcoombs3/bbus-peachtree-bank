import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { PocketsConfiguration, CONFIG_TOKEN } from './configuration';
import { HttpClient } from '@angular/common/http';

import { DataModulesManager } from "@backbase/foundation-ang/data-http";

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers:    []
})
export class PocketsApiModule {
    public static forRoot(configurationFactory: () => PocketsConfiguration): ModuleWithProviders<PocketsApiModule> {
        return {
            ngModule: PocketsApiModule,
            providers: [ { provide: PocketsConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: PocketsApiModule,
                 @Optional() http: HttpClient,
                 @Optional() dataModulesManager: DataModulesManager | null,
                 config: PocketsConfiguration,

        ) {
        if (parentModule) {
            throw new Error('PocketsApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }

        if (dataModulesManager) {
            dataModulesManager.setModuleConfig(CONFIG_TOKEN, {
                apiRoot: '',
                servicePath: config.basePath || '',
                headers: {},
            });
        }
    }
}
