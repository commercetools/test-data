import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomerLimitsProjection,
  TCreateCustomerLimitsProjectionBuilder,
} from './types';

const Model: TCreateCustomerLimitsProjectionBuilder = () =>
  Builder<TCustomerLimitsProjection>({
    generator,
    transformers,
  });

export default Model;