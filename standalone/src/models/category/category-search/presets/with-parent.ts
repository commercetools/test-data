import type { TBuilder } from '@/core';
import { CategorySearchGraphql } from '../index';
import type { TCategorySearchGraphql } from '../types';

const withParent = (): TBuilder<TCategorySearchGraphql> => {
  return CategorySearchGraphql.random().parent(CategorySearchGraphql.random());
};

export default withParent;
