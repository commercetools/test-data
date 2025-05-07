import { fake, type TModelFieldsConfig } from '@commercetools-test-data/core';
import { ProductDataGraphql, ProductDataRest } from '../product-data';
import type {
  TProductCatalogDataRest,
  TProductCatalogDataGraphql,
} from './types';

export const restFieldsConfig: TModelFieldsConfig<TProductCatalogDataRest> = {
  fields: {
    published: fake((f) => f.datatype.boolean()),
    current: fake(() => ProductDataRest.random()),
    staged: fake(() => ProductDataRest.random()),
    hasStagedChanges: fake((f) => f.datatype.boolean()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductCatalogDataGraphql> =
  {
    fields: {
      __typename: 'ProductCatalogData',
      published: fake((f) => f.datatype.boolean()),
      current: fake(() => ProductDataGraphql.random()),
      staged: fake(() => ProductDataGraphql.random()),
      hasStagedChanges: fake((f) => f.datatype.boolean()),
    },
  };
