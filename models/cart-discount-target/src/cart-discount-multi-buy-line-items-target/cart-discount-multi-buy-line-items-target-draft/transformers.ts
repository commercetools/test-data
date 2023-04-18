import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyLineItemsTargetDraft,
  TCartDiscountMultiBuyLineItemsTargetDraftGraphql,
} from '../types';

// TODO: drafts of these models don't have REST representations, delete them
const transformers = {
  default: Transformer<
    TCartDiscountMultiBuyLineItemsTargetDraft,
    TCartDiscountMultiBuyLineItemsTargetDraft
  >('default', {}),
  rest: Transformer<
    TCartDiscountMultiBuyLineItemsTargetDraft,
    TCartDiscountMultiBuyLineItemsTargetDraft
  >('rest', {}),
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
