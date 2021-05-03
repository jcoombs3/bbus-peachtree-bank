import { ExternalServices } from '@backbase/foundation-ang/start';
import { ContentType } from '@backbase/lib-bb-page-bootstrap-cdn';

export function auth() {
  return {
    login: (username: any, password: any) => Promise.resolve(),
    logout: () => Promise.resolve(),
    goToLoginPage: () => {},
    register: (countdown: any) => () => {},
    refresh: () => Promise.resolve(),
    timeToLive: () => 100,
  };
}

export function eventBus() {
  const subscriptions = {} as any;
  const events = {
    publish(eventName: string, data: any) {
      if (subscriptions[eventName]) {
        subscriptions[eventName].forEach(function (listener: any) {
          listener(data);
        });
      }
    },
    subscribe(eventName: string, listener: any) {
      subscriptions[eventName] = subscriptions[eventName] || [];
      subscriptions[eventName].push(listener);
    },
    unsubscribe(eventName: string, listener: any) {
      const eventListeners = subscriptions[eventName];
      if (eventListeners) {
        eventListeners.splice(eventListeners.indexOf(listener), 1);
      }
    },
  };
  return events;
}

export function navigation() {
  return {
    getBreadcrumbs: (uuid: any, depth: any) => {
      return Promise.resolve({
        type: 'externalLink',
        title: 'Backbase',
        url: 'http://www.backbase.com',
        isCurrent: true,
        properties: {},
      });
    },
    getTree: (uuid: string, depth: number) => {},
  };
}

export function pageConfig() {
  return {
    apiRoot: '/gateway/api',
    staticResourcesRoot: '/gateway/api/portal',
    portalName: 'backbase-wc3',
    pageName: 'index',
    currentLink: '',
    version: '6',
    locale: 'en-US',
  };
}

export function portalContent() {
  return {
    get: () => {
      return Promise.resolve({
        type: ContentType.IMAGE,
        contentRef: '/../../assets/logo-sml.svg',
      });
    },
  };
}

export const services: ExternalServices = {
  auth: auth,
  eventBus: eventBus,
  navigation: navigation,
  pageConfig: pageConfig,
  portalContent: portalContent,
};
