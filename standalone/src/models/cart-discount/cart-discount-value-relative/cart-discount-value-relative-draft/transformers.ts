import { Transformer } from '@/core';
import type {
  TCartDiscountValueRelativeDraft,
  TCartDiscountValueRelativeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TCartDiscountValueRelativeDraft,
    TCartDiscountValueRelativeDraft
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TCartDiscountValueRelativeDraft,
    TCartDiscountValueRelativeDraft
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TCartDiscountValueRelativeDraft,
    TCartDiscountValueRelativeDraftGraphql
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
