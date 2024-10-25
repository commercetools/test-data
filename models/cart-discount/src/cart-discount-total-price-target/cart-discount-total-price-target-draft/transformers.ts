import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountTotalPriceTargetDraft,
  TCartDiscountTotalPriceTargetDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountTotalPriceTargetDraft,
    TCartDiscountTotalPriceTargetDraft
  >('default', {}),
  graphql: Transformer<
    TCartDiscountTotalPriceTargetDraft,
    TCartDiscountTotalPriceTargetDraftGraphql
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
