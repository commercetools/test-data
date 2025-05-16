import { Transformer } from '@/core';
import type {
  TCartDiscountShippingCostTargetDraft,
  TCartDiscountShippingCostTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountShippingCostTargetDraft,
    TCartDiscountShippingCostTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountShippingCostTargetDraft,
    TCartDiscountShippingCostTargetDraftGraphql
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
