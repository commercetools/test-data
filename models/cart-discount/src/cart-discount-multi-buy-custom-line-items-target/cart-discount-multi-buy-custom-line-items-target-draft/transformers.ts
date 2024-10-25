import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetDraft,
  TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountMultiBuyCustomLineItemsTargetDraft,
    TCartDiscountMultiBuyCustomLineItemsTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountMultiBuyCustomLineItemsTargetDraft,
    TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => {
      const { type, ...rest } = fields;

      return {
        [type]: {
          ...rest,
        },
      };
    },
  }),
};

export default transformers;
