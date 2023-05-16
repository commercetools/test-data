import { Transformer } from '@commercetools-test-data/core';
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
    replaceFields: ({ fields }) => ({
      shipping: {
        ...fields,
      },
    }),
  }),
};

export default transformers;
