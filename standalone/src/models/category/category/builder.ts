import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCategoryTypeBuilder, TCategory } from './types';

const Model: TCreateCategoryTypeBuilder<TCategory> = () =>
  Builder<TCategory>({
    generator,
    transformers,
  });

export default Model;
