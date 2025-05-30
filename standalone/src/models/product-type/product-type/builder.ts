import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateProductTypeBuilder, TProductType } from './types';

const Model: TCreateProductTypeBuilder = () =>
  Builder<TProductType>({
    generator,
    transformers,
  });

export default Model;
