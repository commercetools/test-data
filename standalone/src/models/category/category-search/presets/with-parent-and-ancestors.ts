import { TCategorySearchBuilder } from '../../types';
import CategorySearch from '../builder';

const withParentAndAncestors = (): TCategorySearchBuilder => {
  return CategorySearch()
    .parent(CategorySearch())
    .ancestors([CategorySearch()]);
};

export default withParentAndAncestors;
