import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCartClassificationPriceTier,
  TCartClassificationPriceTierBuilder,
} from './types';

const Model: TCartClassificationPriceTierBuilder = () =>
  Builder<TCartClassificationPriceTier>({
    generator,
    transformers,
  });

export default Model;
