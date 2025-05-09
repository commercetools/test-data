import { Transformer } from '../../../../core';
import type {
  TCartDiscountLineItemsTargetDraft,
  TCartDiscountLineItemsTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountLineItemsTargetDraft,
    TCartDiscountLineItemsTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountLineItemsTargetDraft,
    TCartDiscountLineItemsTargetDraftGraphql
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
