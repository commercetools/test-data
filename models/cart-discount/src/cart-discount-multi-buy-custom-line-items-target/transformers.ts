import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyCustomLineItemsTarget,
  TCartDiscountMultiBuyCustomLineItemsTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountMultiBuyCustomLineItemsTarget,
    TCartDiscountMultiBuyCustomLineItemsTarget
  >('default', {}),
  rest: Transformer<
    TCartDiscountMultiBuyCustomLineItemsTarget,
    TCartDiscountMultiBuyCustomLineItemsTarget
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountMultiBuyCustomLineItemsTarget,
    TCartDiscountMultiBuyCustomLineItemsTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'MultiBuyCustomLineItemsTarget',
    }),
  }),
};

export default transformers;
