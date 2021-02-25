import { ExternalServices } from '@backbase/foundation-ang/start';
import { ContentType } from '@backbase/foundation-ang/web-sdk';

export const services: ExternalServices = {
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
