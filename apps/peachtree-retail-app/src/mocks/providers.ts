import { Provider } from '@angular/core';
import { ProductSummaryHttpServiceMocksProvider } from '@backbase/data-ang/arrangements';
import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

export const mockProviders: Array<Provider> = [createMocksInterceptor(), ProductSummaryHttpServiceMocksProvider];
