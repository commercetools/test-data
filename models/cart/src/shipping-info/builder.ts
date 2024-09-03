import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateShippingInfoBuilder, TShippingInfo } from './types';

const Model: TCreateShippingInfoBuilder = () =>
  Builder<TShippingInfo>({
    generator,
    transformers,
  });

export default Model;
