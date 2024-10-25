import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountCustomLineItemsTarget,
  TCartDiscountCustomLineItemsTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountCustomLineItemsTarget,
    TCartDiscountCustomLineItemsTarget
  >('default', {}),
  rest: Transformer<
    TCartDiscountCustomLineItemsTarget,
    TCartDiscountCustomLineItemsTarget
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountCustomLineItemsTarget,
    TCartDiscountCustomLineItemsTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'CustomLineItemsTarget',
    }),
  }),
};

export default transformers;
