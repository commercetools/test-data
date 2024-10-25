import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountCustomLineItemsTargetDraft,
  TCartDiscountCustomLineItemsTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountCustomLineItemsTargetDraft,
    TCartDiscountCustomLineItemsTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountCustomLineItemsTargetDraft,
    TCartDiscountCustomLineItemsTargetDraftGraphql
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
