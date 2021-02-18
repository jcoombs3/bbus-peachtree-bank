import { Item } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';
import { Environment } from './type';
import { mockProviders } from '../mocks/providers';
import { pageModel } from '../mocks/page-model';

const services: ExternalServices = {};

export const environment: Environment = {
  production: false,
  mockProviders: mockProviders,
  bootstrap: {
    pageModel: pageModel,
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
