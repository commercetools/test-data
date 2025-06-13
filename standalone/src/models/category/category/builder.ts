import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCategoryBuilder, TCategory } from './types';

const Model: TCreateCategoryBuilder = () =>
  Builder<TCategory>({
    generator,
    transformers,
  });

export default Model;
