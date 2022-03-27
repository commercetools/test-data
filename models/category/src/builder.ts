import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateCategoryBuilder, TCategory } from './types';

const Category: TCreateCategoryBuilder = () =>
  Builder<TCategory>({
    generator,
    transformers,
  });

export default Category;
