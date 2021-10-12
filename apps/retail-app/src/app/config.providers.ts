import { Provider } from '@angular/core';
import { HttpXsrfInterceptor } from './services/http-xsrf.interceptor';
import { HttpXsrfTokenExtractor, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  QuickTransferProductKinds,
  QuickTransferConfigType,
  BB_QUICK_TRANSFER_CONFIG_TOKEN,
  QuickTransferAmountField,
  QuickTransferField,
} from '@backbase/retail-ang/quick-transfer';
import {
  AccountsTransactionsJourneyConfiguration,
  AccountsTransactionsJourneyConfigurationToken,
} from '@backbase/accounts-transactions-journey-ang';
import { CampaignSpaceConfiguration, CampaignSpaceConfigurationToken } from '@backbase/campaign-space-ang';
import { PlacesJourneyConfigurationToken, PlacesJourneyConfiguration } from '@backbase/places-journey-ang';
import { AnimationDriver } from '@angular/animations/browser';
import { AppAnimationDriver } from './services/app.animation.driver';
import { BudgetJourneyConfigurationToken, BudgetJourneyConfiguration } from '@backbase/budget-journey-ang';
import {
  AnalysisType,
  IncomeSpendingAnalysisJourneyConfiguration,
  IncomeSpendingAnalysisJourneyConfigurationToken,
} from '@backbase/income-spending-analysis-journey-ang';
import { RemoteConfigService } from '@backbase/remote-config-ang';

export const AccountsTransactionsConfigProvider: Provider = {
  provide: AccountsTransactionsJourneyConfigurationToken,
  useFactory: (remoteConfig: RemoteConfigService<any>) => ({
    showCheckImages: true,
    maskIndicator: true,
    enableManageAccounts: remoteConfig.getValue('show_manage_accounts'),
  }),
  deps: [RemoteConfigService],
};

export const CampaignSpaceConfigProvider: Provider = {
  provide: CampaignSpaceConfigurationToken,
  useValue: <Partial<CampaignSpaceConfiguration>>{
    dimensions: '328x430',
    title: 'Accounts and Transactions side banner',
  },
};

export const PlacesConfigProvider: Array<Provider> = [
  {
    provide: PlacesJourneyConfigurationToken,
    useValue: <Partial<PlacesJourneyConfiguration>>{
      latitude: 40.72345,
      longitude: -73.9924,
      mapZoom: 12,
      placeTypes: {
        branch: {
          iconName: 'account',
          markerUrl: 'branch-marker.svg',
        },
        atm: {
          iconName: 'credit-card',
          markerUrl: 'atm-marker.svg',
        },
      },
    },
  },
];

export const HttpXsrfProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpXsrfInterceptor,
  deps: [HttpXsrfTokenExtractor],
  multi: true,
};

export const QuickTransferConfigProvider: Provider = {
  provide: BB_QUICK_TRANSFER_CONFIG_TOKEN,
  useValue: <QuickTransferConfigType>{
    fields: {
      fromAccount: <QuickTransferField>{
        productKinds: [
          QuickTransferProductKinds.savingsAccount,
          QuickTransferProductKinds.currentAccount,
          QuickTransferProductKinds.creditCard,
          QuickTransferProductKinds.loanAccount,
          QuickTransferProductKinds.connectedAccounts,
        ],
        otherFilters: [{ key: 'currency', value: ['EUR', 'AED', 'USD'] }],
        connectedAccountsSubHeader: 'Connected Accounts',
      },
      toAccount: <QuickTransferField>{
        productKinds: [
          QuickTransferProductKinds.savingsAccount,
          QuickTransferProductKinds.currentAccount,
          QuickTransferProductKinds.creditCard,
          QuickTransferProductKinds.loanAccount,
          QuickTransferProductKinds.connectedAccounts,
          QuickTransferProductKinds.contacts,
        ],
        connectedAccountsSubHeader: 'Connected Accounts',
      },
      amount: <QuickTransferAmountField>{ initialCurrency: 'USD' },
    },
    businessFunction: 'A2A Transfer',
    successEvents: 'eventName',
    paymentTypes: {
      internal: 'INTERNAL_TRANSFER',
      external: 'EXTERNAL_A2A',
      contact: 'INTRABANK_TRANSFER',
    },
    disabledCombinations: [
      {
        from: QuickTransferProductKinds.loanAccount,
        to: QuickTransferProductKinds.loanAccount,
      },
      {
        from: QuickTransferProductKinds.creditCard,
        to: QuickTransferProductKinds.creditCard,
      },
    ],
  },
};

export const AnimationProvider: Provider = {
  provide: AnimationDriver,
  useClass: AppAnimationDriver,
};

export const BudgetConfigProvider: Provider = {
  provide: BudgetJourneyConfigurationToken,
  useValue: {
    showPercentage: false,
    budgetSafeZoneLimit: 80,
    notificationDismissTime: 5,
    maxBudgets: null,
  } as Partial<BudgetJourneyConfiguration>,
};

export const IncomeAnalysisConfigProvider: Provider = {
  provide: IncomeSpendingAnalysisJourneyConfigurationToken,
  useValue: <IncomeSpendingAnalysisJourneyConfiguration>{
    analysisType: AnalysisType.INCOME,
  },
};
