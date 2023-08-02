import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TPaymentMethodInfoInput,
  TCreatePaymentMethodInfoInputBuilder,
} from './types';

const Model: TCreatePaymentMethodInfoInputBuilder = () =>
  Builder<TPaymentMethodInfoInput>({
    generator,
    transformers,
  });

export default Model;
