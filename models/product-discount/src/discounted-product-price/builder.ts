import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateDiscountedPriceBuilder,
  TDiscountedProductPriceRest,
} from './types';

const Model: TCreateDiscountedPriceBuilder = () =>
  Builder<TDiscountedProductPriceRest>({
    generator,
    transformers,
  });

export default Model;
