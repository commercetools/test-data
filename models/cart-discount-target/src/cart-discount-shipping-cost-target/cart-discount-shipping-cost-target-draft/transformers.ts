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
  rest: Transformer<
    TCartDiscountShippingCostTargetDraft,
    TCartDiscountShippingCostTargetDraft
  >('rest', {}),
  graphql: Transformer<
    TCartDiscountShippingCostTargetDraft,
    TCartDiscountShippingCostTargetDraftGraphql
  >('graphql', {
    replaceFields: ({ fields }) => ({
      shipping: {
        ...fields,
        __typename: 'ShippingTargetInput',
      },
      __typename: 'CartDiscountTargetInput',
    }),
  }),
};

export default transformers;
