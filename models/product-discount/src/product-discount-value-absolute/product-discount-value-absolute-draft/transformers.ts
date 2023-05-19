import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountValueAbsoluteDraft,
  TProductDiscountValueAbsoluteDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TProductDiscountValueAbsoluteDraft,
    TProductDiscountValueAbsoluteDraft
  >('default', {
    buildFields: ['money'],
  }),
  rest: Transformer<
    TProductDiscountValueAbsoluteDraft,
    TProductDiscountValueAbsoluteDraft
  >('rest', {
    buildFields: ['money'],
  }),
  graphql: Transformer<
    TProductDiscountValueAbsoluteDraft,
    TProductDiscountValueAbsoluteDraftGraphql
  >('graphql', {
    buildFields: ['money'],
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
