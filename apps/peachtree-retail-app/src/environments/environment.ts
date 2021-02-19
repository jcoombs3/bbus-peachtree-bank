import { ExternalServices } from '@backbase/foundation-ang/start';
import { Environment } from './type';
import { mockProviders } from '../mocks/providers';
import { pageModel } from '../mocks/page-model';
import { ImageContentItem, StructuredContentItem, ContentType } from '@backbase/foundation-ang/web-sdk';

const services: ExternalServices = {
  auth: () => ({
    login: (username: any, password: any) => Promise.resolve(),
    logout: () => Promise.resolve(),
    goToLoginPage: () => {},
    register: (countdown: any) => () => {},
    refresh: () => Promise.resolve(),
    timeToLive: () => 100,
  }),
  eventBus: () => ({
    publish: (eventName: any, data: any) => {
      console.log(`eventBus published '${eventName}' with payload:`, data);
    },
    subscribe: (eventName: any, listener: any) => {
      console.log(`eventBus subscribed '${eventName}' to listener:`, listener);
    },
    unsubscribe: (eventName: any, listener: any) => {
      console.log(`eventBus unsubscribed '${eventName}' from listener:`, listener);
    },
  }),
  navigation: () => ({
    getBreadcrumbs: (uuid: any, depth: any) => {
      return Promise.resolve({
        type: 'externalLink',
        title: 'Backbase',
        url: 'http://www.backbase.com',
        isCurrent: true,
        properties: {},
      });
    },
    getTree: (uuid: any, depth: any) => {
      return Promise.resolve({
        type: 'externalLink',
        title: 'Backbase',
        url: 'http://www.backbase.com',
        isCurrent: true,
        isInPath: false,
        properties: {},
        children: [],
      });
    },
  }),
  pageConfig: () => ({
    apiRoot: '/gateway/api',
    staticResourcesRoot: '/gateway/api/portal',
    portalName: 'backbase-wc3',
    pageName: 'index',
    currentLink: '',
    version: '6',
    locale: 'en-US',
  }),
  portalContent: () => ({
    get: () => {
      return Promise.resolve({
        type: ContentType.IMAGE,
        contentRef: '/../../assets/logo-sml.svg',
      });
    },
  }),
};

export const environment: Environment = {
  production: false,
  mockProviders: mockProviders,
  bootstrap: {
    pageModel: pageModel,
    services: services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
