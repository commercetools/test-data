import { Builder } from '@commercetools-test-data/core';
import type { StandalonePrice } from '@commercetools/platform-sdk';
import generator from './generator';
import transformers from './transformers';
import type { TCreateStandalonePriceBuilder } from './types';

const Model: TCreateStandalonePriceBuilder = () =>
  Builder<StandalonePrice>({
    generator,
    transformers,
  });

export default Model;
