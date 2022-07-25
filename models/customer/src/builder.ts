import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCustomerBuilder, TCustomer } from '../types';

const Model: TCreateCustomerBuilder = () =>
  Builder<TCustomer>({
    generator,
    transformers,
  });

export default Model;
