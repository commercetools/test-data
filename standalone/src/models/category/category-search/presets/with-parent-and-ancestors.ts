import { TBuilder } from '@/core';
import { TCategorySearchGraphql } from '../../category/types';
import { CategorySearchGraphql } from '../index';

const withParentAndAncestors = (): TBuilder<TCategorySearchGraphql> => {
  return CategorySearchGraphql.random()
    .parent(CategorySearchGraphql.random())
    .ancestors([CategorySearchGraphql.random()]);
};

export default withParentAndAncestors;
