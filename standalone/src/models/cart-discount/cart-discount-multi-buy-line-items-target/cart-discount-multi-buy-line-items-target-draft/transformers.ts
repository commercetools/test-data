import { Transformer } from '../../../../core';
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
