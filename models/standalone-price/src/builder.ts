import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TStandalonePrice, TCreateStandalonePriceBuilder } from './types';

const Model: TCreateStandalonePriceBuilder = () =>
  Builder<TStandalonePrice>({
    name: 'StandalonePrice',
    generator,
    transformers,
  });

export default Model;
