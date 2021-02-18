import { Provider } from '@angular/core';
import {
  ProductSummaryHttpServiceMocksProvider,
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
import { IdentityManagementServiceMocksProvider } from '@backbase/data-ang/user';
import { AuthorizedUserServiceMocksProvider } from '@backbase/data-ang/authorized-users';

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
  IdentityManagementServiceMocksProvider,
  AuthorizedUserServiceMocksProvider,
];
