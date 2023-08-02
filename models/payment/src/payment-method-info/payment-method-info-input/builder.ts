import { Builder } from '@commercetools-test-data/core';
import type {
  TPaymentMethodInfoInput,
  TCreatePaymentMethodInfoInputBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePaymentMethodInfoInputBuilder = () =>
  Builder<TPaymentMethodInfoInput>({
    generator,
    transformers,
  });

export default Model;
