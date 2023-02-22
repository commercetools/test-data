import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCustomerGroupBuilder, TCustomerGroup } from './types';

const Model: TCreateCustomerGroupBuilder = () =>
  Builder<TCustomerGroup>({
    generator,
    transformers,
  });

export default Model;
