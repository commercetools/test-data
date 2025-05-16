import { Transformer } from '@/core';
import type {
  TCartDiscountMultiBuyLineItemsTarget,
  TCartDiscountMultiBuyLineItemsTargetGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountMultiBuyLineItemsTarget,
    TCartDiscountMultiBuyLineItemsTarget
  >('default', {}),
  rest: Transformer<
    TCartDiscountMultiBuyLineItemsTarget,
    TCartDiscountMultiBuyLineItemsTarget
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountMultiBuyLineItemsTarget,
    TCartDiscountMultiBuyLineItemsTargetGraphql
  >('graphql', {
    addFields: () => ({
      __typename: 'MultiBuyLineItemsTarget',
    }),
  }),
};

export default transformers;
