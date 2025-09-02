import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCartValuePriceTier, TCartValuePriceTierBuilder } from './types';

const Model: TCartValuePriceTierBuilder = () =>
  Builder<TCartValuePriceTier>({
    generator,
    transformers,
  });

export default Model;
