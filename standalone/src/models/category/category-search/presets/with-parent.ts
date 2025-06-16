import { TBuilder } from '../../../../core';
import { TCategorySearchGraphql } from '../../category/types';
import { CategorySearchGraphql } from '../index';

const withParent = (): TBuilder<TCategorySearchGraphql> => {
  return CategorySearchGraphql.random().parent(CategorySearchGraphql.random());
};

export default withParent;
