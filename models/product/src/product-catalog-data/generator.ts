import { Generator, fake } from '@commercetools-test-data/core';
import * as ProductData from '../product-data';
import { TProductCatalogData } from './types';

// https://docs.commercetools.com/api/projects/products#productcatalogdata

const generator = Generator<TProductCatalogData>({
  fields: {
    current: fake(() => ProductData.random()),
    staged: fake(() => ProductData.random()),
    published: fake((f) => f.datatype.boolean()),
    hasStagedChanges: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
