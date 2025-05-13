import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCustomView, TCreateCustomViewBuilder } from './types';

const Model: TCreateCustomViewBuilder = () =>
  Builder<TCustomView>({
    generator,
    transformers,
  });

export default Model;
