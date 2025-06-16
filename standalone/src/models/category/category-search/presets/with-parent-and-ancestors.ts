import type { TBuilder } from '@/core';
import { CategorySearchGraphql } from '../index';
import type { TCategorySearchGraphql } from '../types';

const withParentAndAncestors = (): TBuilder<TCategorySearchGraphql> => {
  return CategorySearchGraphql.random()
    .parent(CategorySearchGraphql.random())
    .ancestors([CategorySearchGraphql.random()]);
};

export default withParentAndAncestors;
