import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountValueRelativeDraft,
  TProductDiscountValueRelativeDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<
    TProductDiscountValueRelativeDraft,
    TProductDiscountValueRelativeDraft
  >('default', {
    buildFields: [],
  }),
  rest: Transformer<
    TProductDiscountValueRelativeDraft,
    TProductDiscountValueRelativeDraft
  >('rest', {
    buildFields: [],
  }),
  graphql: Transformer<
    TProductDiscountValueRelativeDraft,
    TProductDiscountValueRelativeDraftGraphql
  >('graphql', {
    buildFields: [],
  }),
};

export default transformers;
