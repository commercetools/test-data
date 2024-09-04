import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCreateDiscountedLineItemPortionBuilder,
  TDiscountedLineItemPortion,
} from './types';

const Model: TCreateDiscountedLineItemPortionBuilder = () =>
  Builder<TDiscountedLineItemPortion>({
    generator,
    transformers,
  });

export default Model;
