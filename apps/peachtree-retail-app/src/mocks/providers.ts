import { Provider } from '@angular/core';
import {
  ProductSummaryHttpServiceMocksProvider,
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
} from '@backbase/data-ang/arrangements';
import { createMocks, createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { TransactionClientHttpServiceMocksProvider } from '@backbase/data-ang/transactions';
import { NotificationsHttpServiceMocksProvider } from '@backbase/data-ang/notifications';
import {
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
} from '@backbase/data-ang/accesscontrol';
import {
  IdentityManagementServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider,
} from '@backbase/user-http-ang';
import { CategoriesHttpServiceMocksProvider } from '@backbase/categories-management-http-ang';
import { AuthorizedUserServiceMocksProvider } from '@backbase/authorized-user-http-ang';

const userMockProvider = createMocks([
  {
    urlPattern: '/client-api/v2/users/me',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          externalId: 'externalBankId1',
          preferredLanguage: 'fr-FR',
          legalEntityId: 'c2185f7d-a1e8-4f97-990d-cb1cfd0d8f53',
          legalEntityName: 'BANK A',
          id: '3da7e7fb-857f-44c2-92aa-80572f6394e2',
          fullName: 'Henry Duncan',
        },
      },
    ],
  },
]);

const pocketsListMockProvider = createMocks([
  {
    urlPattern: 'http://localhost:4201/api/pockets',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: [
          {
            id: '1a',
            goal: 1500,
            goalDate: '2021-04-20',
            funds: 50,
            name: 'Travel',
            transactions: [
              {
                amount: '10.00',
                account: 'Saving',
                incoming: true,
                date: '2019-11-8',
              },
              {
                amount: '5.00',
                account: 'Current',
                date: '2019-07-12',
              },
              {
                amount: '45.00',
                account: 'Shared',
                incoming: true,
                date: '2019-07-12',
              },
            ],
          },
          {
            id: '2b',
            goal: undefined,
            funds: 0,
            name: 'Savings',
          },
          {
            id: '3c',
            goal: 500,
            goalDate: '2021-04-19',
            funds: 250,
            name: 'Transportation',
            transactions: [
              {
                amount: '250',
                account: 'Saving',
                incoming: true,
                date: '2020-09-11',
              },
            ],
          },
        ],
      },
    ],
  },
]);

const pocket1aMockProvider = createMocks([
  {
    urlPattern: 'http://localhost:4201/api/pockets/1a',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          id: '1a',
          goal: { amount: 1500, currency: 'USD' },
          goalDate: '2021-04-20',
          funds: { amount: 50, currency: 'USD' },
          name: 'Travel',
          transactions: [
            {
              amount: '10.00',
              account: 'Saving',
              incoming: true,
              date: '2019-11-8',
            },
            {
              amount: '5.00',
              account: 'Current',
              date: '2019-07-12',
            },
            {
              amount: '45.00',
              account: 'Shared',
              incoming: true,
              date: '2019-07-12',
            },
          ],
        },
      },
    ],
  },
]);

const pocket2bMockProvider = createMocks([
  {
    urlPattern: 'http://localhost:4201/api/pockets/2b',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          id: '2b',
          goal: undefined,
          funds: {
            amount: 0,
            currency: 'USD',
          },
          name: 'Savings',
        },
      },
    ],
  },
]);

const pocket3cMockProvider = createMocks([
  {
    urlPattern: 'http://localhost:4201/api/pockets/3c',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          id: '3c',
          goal: {
            amount: 500,
            currency: 'USD',
          },
          goalDate: '2021-04-19',
          funds: { amount: 250, currency: 'USD' },
          name: 'Transportation',
          transactions: [
            {
              amount: '250',
              account: 'Saving',
              incoming: true,
              date: '2020-09-11',
            },
          ],
        },
      },
    ],
  },
]);

const pocketPostMockProvider = createMocks([
  {
    urlPattern: 'http://localhost:4201/api/pocket',
    method: 'POST',
    responses: [
      {
        status: 200,
      },
    ],
  },
]);

const accessControlMocks = createMocks([
  {
    urlPattern: '/client-api/v2/accessgroups/usercontext/serviceagreements',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: [
          {
            id: 'a1198a205a404eb7b47fa553db920429',
            name: 'Online Banking Service Agreement',
            description: 'Service Agreement between Online Banking and Backbase',
            isMaster: false,
          },
          {
            id: '37115f7b556a4e11ba0bfd07e2567b1d',
            name: 'Doe Corporation Service Agreement',
            description: 'Service Agreement for Doe Corp.',
            isMaster: true,
          },
        ],
      },
    ],
  },
]);

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
  pocketPostMockProvider,
  pocket1aMockProvider,
  pocket2bMockProvider,
  pocket3cMockProvider,
  pocketsListMockProvider,
  accessControlMocks,
  ProductSummaryHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  ServiceAgreementHttpServiceMocksProvider,
  NotificationsHttpServiceMocksProvider,
  UserManagementServiceMocksProvider,
  UserProfileManagementServiceMocksProvider,
  CategoriesHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  AccountsHttpServiceMocksProvider,
  IdentityManagementServiceMocksProvider,
];
