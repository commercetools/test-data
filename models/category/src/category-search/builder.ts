import { Builder } from '@commercetools-test-data/core';
import type { TCreateCategorySearchBuilder, TCategorySearch } from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCategorySearchBuilder = () =>
  Builder<TCategorySearch>({
    generator,
    transformers,
  });

export default Model;