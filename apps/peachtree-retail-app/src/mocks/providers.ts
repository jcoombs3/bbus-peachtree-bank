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

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
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
