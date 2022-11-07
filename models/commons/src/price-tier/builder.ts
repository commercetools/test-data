import { Builder } from '@commercetools-test-data/core';
import type { TCreatePriceTierBuilder, TPriceTier } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePriceTierBuilder = () =>
  Builder<TPriceTier>({
    generator,
    transformers,
  });

export default Model;
