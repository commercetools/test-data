import CategorySearch from '../builder';

function withParentAndAncestors() {
  return CategorySearch()
    .parent(CategorySearch())
    .ancestors([CategorySearch()]);
}

export default withParentAndAncestors;
