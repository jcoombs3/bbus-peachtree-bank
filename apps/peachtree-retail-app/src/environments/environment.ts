import { Environment } from './type';
import { mockProviders } from '../mocks/providers';
import { pageModel } from '../mocks/page-model';
import { services } from '../mocks/external-services';

export const environment: Environment = {
  production: false,
  mockProviders: mockProviders,
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
