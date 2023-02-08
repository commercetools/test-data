import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TDiscountCode, TCreateDiscountCodeBuilder } from './types';

const Model: TCreateDiscountCodeBuilder = () =>
  Builder<TDiscountCode>({
    generator,
    transformers,
  });

export default Model;
