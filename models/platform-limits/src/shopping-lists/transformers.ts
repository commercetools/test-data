import { Transformer } from '@commercetools-test-data/core';
import {
  TShoppingListLimitsProjection,
  TShoppingListLimitsProjectionGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjection
  >('default', {
    buildFields: ['total', 'lineItems', 'textLineItems'],
  }),
  rest: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjection
  >('rest', {
    buildFields: ['total', 'lineItems', 'textLineItems'],
  }),
  graphql: Transformer<
    TShoppingListLimitsProjection,
    TShoppingListLimitsProjectionGraphql
  >('graphql', {
    buildFields: ['total', 'lineItems', 'textLineItems'],
    addFields: () => ({
      __typename: 'ShoppingListLimitsProjection',
    }),
  }),
};

export default transformers;
