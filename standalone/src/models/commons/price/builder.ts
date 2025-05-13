import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TPrice, TCreatePriceBuilder } from './types';

const Model: TCreatePriceBuilder = () =>
  Builder<TPrice>({
    name: 'Price',
    generator,
    transformers,
  });

export default Model;
