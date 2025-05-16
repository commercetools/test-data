import { Transformer } from '@/core';
import type {
  TCartDiscountValueAbsoluteDraft,
  TCartDiscountValueAbsoluteDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountValueAbsoluteDraft,
    TCartDiscountValueAbsoluteDraft
  >('default', {
    buildFields: ['money'],
  }),
  rest: Transformer<
    TCartDiscountValueAbsoluteDraft,
    TCartDiscountValueAbsoluteDraft
  >('rest', {
    buildFields: ['money'],
  }),
  graphql: Transformer<
    TCartDiscountValueAbsoluteDraft,
    TCartDiscountValueAbsoluteDraftGraphql
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
