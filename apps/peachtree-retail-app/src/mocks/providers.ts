import { Provider } from '@angular/core';
import {
  ProductSummaryHttpServiceMocksProvider,
  AccountsHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
} from '@backbase/data-ang/arrangements';
import { createMocks, createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import {
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
} from '@backbase/data-ang/transactions';
import { NotificationsMocksProvider } from '@backbase/notifications-mocks-provider-ang';
import { NotificationsHttpServiceMocksProvider } from '@backbase/data-ang/notifications';
import {
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
} from '@backbase/data-ang/accesscontrol';

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

const userProfileMockProvider = createMocks([
  {
    urlPattern: '/client-api/v2/users/me/profile',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: {
          fullName: 'Mila Example',
          'phone-addresses': [
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e1',
              type: 'MOBILE',
              primary: true,
              number: '07717 371949',
            },
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e2',
              type: 'LAND_LINE',
              primary: false,
              number: '02920 671937',
            },
          ],
          'electronic-addresses': [
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e1',
              type: 'E_MAIL',
              primary: true,
              address: 'test@tester.com',
            },
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e2',
              type: 'PERSONAL',
              primary: false,
              address: 'test_personal@tester.com',
            },
          ],
          'postal-addresses': [
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e1',
              type: 'BUSINESS',
              primary: false,
              addressLine: 'The Bonded Warehouse',
              streetName: 'Atlantic Wharf',
              townName: 'Cardiff',
              postalCode: 'CF10 4HE',
              country: 'GB',
            },
            {
              key: 'cb7653b5-31b2-481d-b9b5-aa4b415c96e2',
              type: 'HOME',
              primary: true,
              addressLine: '2 Hertsmere Rd',
              streetName: 'Canary Wharf',
              townName: 'London',
              postalCode: 'E14 4AB ',
              country: 'GB',
            },
          ],
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
            funds: 47.46,
            name: 'Travel',
            transactions: [
              {
                amount: '9.34',
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
                amount: '43.12',
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
            // img: 'https://img.icons8.com/ios/452/safe.png'
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
              amount: '9.34',
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
              amount: '43.12',
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
          // img: 'https://img.icons8.com/ios/452/safe.png'
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

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
  pocket1aMockProvider,
  pocket2bMockProvider,
  pocket3cMockProvider,
  pocketsListMockProvider,
  userMockProvider,
  ProductSummaryHttpServiceMocksProvider,
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  NotificationsMocksProvider,
  ServiceAgreementHttpServiceMocksProvider,
  ServiceAgreementsHttpServiceMocksProvider,
  NotificationsHttpServiceMocksProvider,
  userProfileMockProvider,
  AccountsHttpServiceMocksProvider,
];
