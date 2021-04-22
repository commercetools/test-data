import type { TCreateCategoryBuilder, TCategory } from './types';

import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';

const Reference: TCreateCategoryBuilder = () =>
  Builder<TCategory>({
    generator,
    transformers,
  });

export default Reference;
