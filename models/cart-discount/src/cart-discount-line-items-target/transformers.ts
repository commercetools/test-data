import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountLineItemsTarget,
  TCartDiscountLineItemsTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountLineItemsTarget,
    TCartDiscountLineItemsTarget
  >('default', {}),
  rest: Transformer<TCartDiscountLineItemsTarget, TCartDiscountLineItemsTarget>(
    'rest',
    {}
  ),
  graphql: Transformer<
    TCartDiscountLineItemsTarget,
    TCartDiscountLineItemsTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'LineItemsTarget',
    }),
  }),
};

export default transformers;
