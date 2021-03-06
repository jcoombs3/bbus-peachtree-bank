import { LazyConfig } from '@backbase/foundation-ang/core';

export const bundlesDefinition: LazyConfig = [
  {
    module: 'AccountsTransactionsJourneyBundleModule',
    loadChildren: () =>
      import('../bundles/accounts-transactions-journey-bundle.module').then(
        (m) => m.AccountsTransactionsJourneyBundleModule,
      ),
  },
  {
    components: ['ContentWidgetComponent', 'NotificationsBadgeWidgetComponent', 'UserContextMenuWidgetComponent'],
    loadChildren: () => import('../bundles/bundle-1').then((m) => m.Bundle1Module),
  },
  {
    components: ['PocketsComponent', 'PocketsDetailsComponent', 'PocketsFormComponent'],
    loadChildren: () => import('../bundles/bundle-2').then((m) => m.Bundle2Module),
  },
  {
    components: ['UserManageProfileWidgetExtendedComponent', 'UserIdentitySecurityCenterWidgetExtendedComponent'],
    loadChildren: () => import('../bundles/bundle-3').then((m) => m.Bundle3Module),
  },
];
