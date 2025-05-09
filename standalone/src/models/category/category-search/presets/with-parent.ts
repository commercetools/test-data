import { TCategorySearchBuilder } from '../../types';
import CategorySearch from '../builder';

const withParent = (): TCategorySearchBuilder => {
  return CategorySearch().parent(CategorySearch());
};

export default withParent;
