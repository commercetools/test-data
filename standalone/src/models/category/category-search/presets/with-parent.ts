import { TCategorySearchBuilder } from '../../category/types';
import CategorySearch from '../builder';

const withParent = (): TCategorySearchBuilder => {
  return CategorySearch().parent(CategorySearch());
};

export default withParent;
