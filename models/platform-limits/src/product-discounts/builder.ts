import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TProductDiscountLimitsProjection,
  TCreateProductDiscountLimitsProjectionBuilder,
} from './types';

const Model: TCreateProductDiscountLimitsProjectionBuilder = () =>
  Builder<TProductDiscountLimitsProjection>({
    generator,
    transformers,
  });

export default Model;