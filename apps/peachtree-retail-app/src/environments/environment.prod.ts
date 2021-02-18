import { mockProviders } from '../mocks/providers';
import { Environment } from './type';

export const environment: Environment = {
  production: false,
  mockProviders: mockProviders,
};
