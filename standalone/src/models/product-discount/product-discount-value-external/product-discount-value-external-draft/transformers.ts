import { Transformer } from '../../../../core';
import type {
  TProductDiscountValueExternalDraft,
  TProductDiscountValueExternalDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TProductDiscountValueExternalDraft,
    TProductDiscountValueExternalDraft
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TProductDiscountValueExternalDraft,
    TProductDiscountValueExternalDraft
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TProductDiscountValueExternalDraft,
    TProductDiscountValueExternalDraftGraphql
  >('graphql', {
    buildFields: [],
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
