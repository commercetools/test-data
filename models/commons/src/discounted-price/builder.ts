import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TDiscountedPrice, TCreateDiscountedPriceBuilder } from './types';

const Model: TCreateDiscountedPriceBuilder = () =>
  Builder<TDiscountedPrice>({
    generator,
    transformers,
  });

export default Model;
