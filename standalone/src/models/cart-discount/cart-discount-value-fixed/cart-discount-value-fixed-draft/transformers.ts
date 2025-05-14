import { Transformer } from '@/core';
import type {
  TCartDiscountValueFixedDraft,
  TCartDiscountValueFixedDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountValueFixedDraft,
    TCartDiscountValueFixedDraft
  >('default', {
    buildFields: ['money'],
  }),
  rest: Transformer<TCartDiscountValueFixedDraft, TCartDiscountValueFixedDraft>(
    'rest',
    {
      buildFields: ['money'],
    }
  ),
  graphql: Transformer<
    TCartDiscountValueFixedDraft,
    TCartDiscountValueFixedDraftGraphql
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
