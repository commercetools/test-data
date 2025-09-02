import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCartScorePriceTier, TCartScorePriceTierBuilder } from './types';

const Model: TCartScorePriceTierBuilder = () =>
  Builder<TCartScorePriceTier>({
    generator,
    transformers,
  });

export default Model;
