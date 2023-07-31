import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TPaymentMethodInfo,
  TCreatePaymentMethodInfoBuilder,
} from './types';

const Model: TCreatePaymentMethodInfoBuilder = () =>
  Builder<TPaymentMethodInfo>({
    generator,
    transformers,
  });

export default Model;
