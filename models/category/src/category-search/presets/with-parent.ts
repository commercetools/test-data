import CategorySearch from '../builder';

function withParent() {
  return CategorySearch().parent(CategorySearch());
}

export default withParent;
