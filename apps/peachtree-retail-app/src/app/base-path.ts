import { ACCESS_CONTROL_BASE_PATH } from '@backbase/accesscontrol-http-ang';
import { ACCOUNT_STATEMENT_BASE_PATH } from '@backbase/account-statements-http-ang';
import { ACTIONS_BASE_PATH } from '@backbase/actions-http-ang';
import { ARRANGEMENT_MANAGER_BASE_PATH } from '@backbase/arrangement-manager-http-ang';
import { AUTHORIZED_USER_BASE_PATH } from '@backbase/authorized-user-http-ang';
import { BUDGETING_BASE_PATH } from '@backbase/budgeting-http-ang';
import { CARDS_BASE_PATH } from '@backbase/cards-http-ang';
import { CATEGORIES_MANAGEMENT_BASE_PATH } from '@backbase/categories-management-http-ang';
import { CONSENT_BASE_PATH } from '@backbase/consent-http-ang';
import { CONTACT_MANAGER_BASE_PATH } from '@backbase/contact-manager-http-ang';
import { PAGE_CONFIG, PageConfig } from '@backbase/foundation-ang/web-sdk';
import { MESSAGES_BASE_PATH } from '@backbase/messages-http-ang';
import { NOTIFICATIONS_BASE_PATH } from '@backbase/notifications-http-ang';
import { PAYMENT_ORDER_A2A_BASE_PATH } from '@backbase/payment-order-a2a-http-ang';
import { PAYMENT_ORDER_BASE_PATH } from '@backbase/payment-order-http-ang';
import { PLACES_BASE_PATH } from '@backbase/places-http-ang';
import { SAVING_GOALS_BASE_PATH } from '@backbase/saving-goals-http-ang';
import { STOP_CHECKS_BASE_PATH } from '@backbase/stop-checks-http-ang';
import { TRANSACTIONS_BASE_PATH } from '@backbase/transactions-http-ang';
import { USER_BASE_PATH } from '@backbase/user-http-ang';

function getBasePath(servicePath: string) {
  return (config: PageConfig) => `${config.apiRoot}/${servicePath}`;
}

export const basePathProviders = [
  { provide: CARDS_BASE_PATH, useFactory: getBasePath('cards-presentation-service'), deps: [PAGE_CONFIG] },
  { provide: TRANSACTIONS_BASE_PATH, useFactory: getBasePath('transaction-manager'), deps: [PAGE_CONFIG] },
  { provide: ARRANGEMENT_MANAGER_BASE_PATH, useFactory: getBasePath('arrangement-manager'), deps: [PAGE_CONFIG] },
  { provide: SAVING_GOALS_BASE_PATH, useFactory: getBasePath('saving-goal-planner'), deps: [PAGE_CONFIG] },
  {
    provide: CATEGORIES_MANAGEMENT_BASE_PATH,
    useFactory: getBasePath('transaction-category-collector'),
    deps: [PAGE_CONFIG],
  },
  { provide: BUDGETING_BASE_PATH, useFactory: getBasePath('budget-planner'), deps: [PAGE_CONFIG] },
  { provide: AUTHORIZED_USER_BASE_PATH, useFactory: getBasePath('authorized-user'), deps: [PAGE_CONFIG] },
  { provide: CONTACT_MANAGER_BASE_PATH, useFactory: getBasePath('contact-manager'), deps: [PAGE_CONFIG] },
  { provide: PAYMENT_ORDER_BASE_PATH, useFactory: getBasePath('payment-order-service'), deps: [PAGE_CONFIG] },
  { provide: STOP_CHECKS_BASE_PATH, useFactory: getBasePath('stop-checks'), deps: [PAGE_CONFIG] },
  { provide: ACCOUNT_STATEMENT_BASE_PATH, useFactory: getBasePath('account-statement'), deps: [PAGE_CONFIG] },
  { provide: USER_BASE_PATH, useFactory: getBasePath('user-manager'), deps: [PAGE_CONFIG] },
  { provide: PAYMENT_ORDER_A2A_BASE_PATH, useFactory: getBasePath('payment-order-a2a'), deps: [PAGE_CONFIG] },
  { provide: PLACES_BASE_PATH, useFactory: getBasePath('places-presentation-service'), deps: [PAGE_CONFIG] },
  { provide: MESSAGES_BASE_PATH, useFactory: getBasePath('messages-service'), deps: [PAGE_CONFIG] },
  { provide: ACTIONS_BASE_PATH, useFactory: getBasePath('action'), deps: [PAGE_CONFIG] },
  { provide: NOTIFICATIONS_BASE_PATH, useFactory: getBasePath('notifications-service'), deps: [PAGE_CONFIG] },
  { provide: ACCESS_CONTROL_BASE_PATH, useFactory: getBasePath('access-control'), deps: [PAGE_CONFIG] },
  { provide: CONSENT_BASE_PATH, useFactory: getBasePath('consent'), deps: [PAGE_CONFIG] },
];
