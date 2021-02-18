import { Provider } from '@angular/core';
import {
  ProductSummaryHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
} from '@backbase/data-ang/arrangements';
import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import {
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
} from '@backbase/data-ang/transactions';

export const mockProviders: Array<Provider> = [
  createMocksInterceptor(),
  ProductSummaryHttpServiceMocksProvider,
  CategoryPeriodTotalsHttpServiceMocksProvider,
  CategoryTotalsHttpServiceMocksProvider,
  TransactionClientHttpServiceMocksProvider,
  ArrangementsHttpServiceMocksProvider,
];
