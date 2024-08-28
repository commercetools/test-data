import { Transformer } from '@commercetools-test-data/core';
import {
  TProjectCustomLimitsProjection,
  TProjectCustomLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjection
  >('default', {
    buildFields: [
      'customers',
      'customerGroups',
      'zones',
      'taxCategories',
      'shippingMethods',
      'productDiscounts',
      'cartDiscounts',
      'stores',
      'shoppingLists',
      'carts',
      'businessUnits',
    ],
  }),
  rest: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjection
  >('rest', {
    buildFields: [
      'customers',
      'customerGroups',
      'zones',
      'taxCategories',
      'shippingMethods',
      'productDiscounts',
      'cartDiscounts',
      'stores',
      'shoppingLists',
      'carts',
      'businessUnits',
    ],
  }),
  graphql: Transformer<
    TProjectCustomLimitsProjection,
    TProjectCustomLimitsProjectionGraphql
  >('graphql', {
    buildFields: [
      'customers',
      'customerGroups',
      'zones',
      'taxCategories',
      'shippingMethods',
      'productDiscounts',
      'cartDiscounts',
      'stores',
      'shoppingLists',
      'carts',
      'businessUnits',
    ],
    addFields: () => ({
      __typename: 'ProjectCustomLimitsProjection',
    }),
  }),
};

export default transformers;
