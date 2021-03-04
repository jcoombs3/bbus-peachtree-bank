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
        status: 400,
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

const categoriesMocks = createMocks([
  {
    urlPattern: '/client-api/v2/categories',
    method: 'GET',
    responses: [
      {
        status: 200,
        body: [
          {
            categoryId: 1,
            categoryName: 'Home',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 2,
                categoryName: 'Mortgage',
                categoryType: 'Expenses',
                parentId: 1,
              },
              {
                categoryId: 3,
                categoryName: 'Rent',
                categoryType: 'Expenses',
                parentId: 1,
              },
            ],
          },
          {
            categoryId: 4,
            categoryName: 'Food & Drinks',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 5,
                categoryName: 'Alcohol & Bars',
                categoryType: 'Expenses',
                parentId: 4,
              },
              {
                categoryId: 6,
                categoryName: 'Fast Food',
                categoryType: 'Expenses',
                parentId: 4,
              },
              {
                categoryId: 7,
                categoryName: 'Groceries',
                categoryType: 'Expenses',
                parentId: 4,
              },
              {
                categoryId: 8,
                categoryName: 'Restaurants',
                categoryType: 'Expenses',
                parentId: 4,
              },
            ],
          },
          {
            categoryId: 9,
            categoryName: 'Health & Beauty',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 10,
                categoryName: 'Beauty',
                categoryType: 'Expenses',
                parentId: 9,
              },
              {
                categoryId: 11,
                categoryName: 'Health & Fitness',
                categoryType: 'Expenses',
                parentId: 9,
              },
            ],
          },
          {
            categoryId: 12,
            categoryName: 'Transportation',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 13,
                categoryName: 'Car',
                categoryType: 'Expenses',
                parentId: 12,
              },
              {
                categoryId: 14,
                categoryName: 'Public Transport',
                categoryType: 'Expenses',
                parentId: 12,
              },
            ],
          },
          {
            categoryId: 15,
            categoryName: 'Shopping',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 16,
                categoryName: 'Clothing',
                categoryType: 'Expenses',
                parentId: 15,
              },
              {
                categoryId: 17,
                categoryName: 'Electronics',
                categoryType: 'Expenses',
                parentId: 15,
              },
            ],
          },
          {
            categoryId: 18,
            categoryName: 'Hobbies & Entertainment',
            categoryType: 'Expenses',
          },
          {
            categoryId: 19,
            categoryName: 'Bills & Utilities',
            categoryType: 'Expenses',
            subCategories: [
              {
                categoryId: 20,
                categoryName: 'Internet',
                categoryType: 'Expenses',
                parentId: 19,
              },
              {
                categoryId: 21,
                categoryName: 'Mobile Phone',
                categoryType: 'Expenses',
                parentId: 19,
              },
              {
                categoryId: 22,
                categoryName: 'Utilities',
                categoryType: 'Expenses',
                parentId: 19,
              },
            ],
          },
          {
            categoryId: 23,
            categoryName: 'Income',
            categoryType: 'Income',
            subCategories: [
              {
                categoryId: 24,
                categoryName: 'Bonus',
                categoryType: 'Income',
                parentId: 23,
              },
              {
                categoryId: 25,
                categoryName: 'Salary/Wages',
                categoryType: 'Income',
                parentId: 23,
              },
            ],
          },
          {
            categoryId: 26,
            categoryName: 'Other Income',
            categoryType: 'Income',
            subCategories: [
              {
                categoryId: 27,
                categoryName: 'Interest Income',
                categoryType: 'Income',
                parentId: 26,
              },
              {
                categoryId: 28,
                categoryName: 'Rental Income',
                categoryType: 'Income',
                parentId: 26,
              },
            ],
          },
          {
            categoryId: 29,
            categoryName: 'Transfers',
            categoryType: 'Transfer',
          },
          {
            categoryId: 30,
            categoryName: 'Uncategorised',
            categoryType: 'General',
          },
        ],
      },
    ],
  },
]);

const userContextMocks = createMocks([
  {
    urlPattern: '/client-api/v2/accessgroups/usercontext',
    method: 'POST',
    responses: [
      {
        status: 200,
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
  userMockProvider,
  ProductSummaryHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
  ServiceAgreementHttpServiceMocksProvider,
  NotificationsHttpServiceMocksProvider,
  userProfileMockProvider,
  accessControlMocks,
  categoriesMocks,
  ServiceAgreementsHttpServiceMocksProvider,
  AccountsHttpServiceMocksProvider,
  userContextMocks,
];
