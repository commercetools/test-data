import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyLineItemsTargetDraft,
  TCartDiscountMultiBuyLineItemsTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountMultiBuyLineItemsTargetDraft,
    TCartDiscountMultiBuyLineItemsTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountMultiBuyLineItemsTargetDraft,
    TCartDiscountMultiBuyLineItemsTargetDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => ({
      multiBuyLineItems: {
        ...fields,
        __typename: 'MultiBuyLineItemsTargetInput',
      },
      __typename: 'CartDiscountTargetInput',
    }),
  }),
};

export default transformers;
