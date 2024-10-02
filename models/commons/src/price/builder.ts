import { Builder } from '@commercetools-test-data/core';
import type { Price } from '@commercetools/platform-sdk';
import generator from './generator';
import transformers from './transformers';
import type { TCreatePriceBuilder } from './types';

const Model: TCreatePriceBuilder = () =>
  Builder<Price>({
    name: 'Price',
    generator,
    transformers,
  });

export default Model;
