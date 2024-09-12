import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCreateDiscountedLineItemPriceBuilder,
  TDiscountedLineItemPrice,
} from './types';

const Model: TCreateDiscountedLineItemPriceBuilder = () =>
  Builder<TDiscountedLineItemPrice>({
    generator,
    transformers,
  });

export default Model;
