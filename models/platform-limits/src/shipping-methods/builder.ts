import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TShippingMethodLimitsProjection,
  TCreateShippingMethodLimitsProjectionBuilder,
} from './types';

const Model: TCreateShippingMethodLimitsProjectionBuilder = () =>
  Builder<TShippingMethodLimitsProjection>({
    generator,
    transformers,
  });

export default Model;