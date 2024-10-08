import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TPriceTier, TCreatePriceTierBuilder } from './types';

const Model: TCreatePriceTierBuilder = () =>
  Builder<TPriceTier>({
    name: 'PriceTier',
    generator,
    transformers,
  });

export default Model;
