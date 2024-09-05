import { Transformer } from '@commercetools-test-data/core';
import {
  TShoppingListLimitsProjection,
  TShoppingListLimitsProjectionGraphql,
} from './types';

const buildFields: (keyof TShoppingListLimitsProjection)[] = [
  'total',
  'lineItems',
  'textLineItems',
];

const transformers = {
  default: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjection
  >('default', {
    buildFields,
  }),
  rest: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjection
  >('rest', {
    buildFields,
  }),
  graphql: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjectionGraphql
  >('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'ShoppingListLimitsProjection',
    }),
  }),
};

export default transformers;
