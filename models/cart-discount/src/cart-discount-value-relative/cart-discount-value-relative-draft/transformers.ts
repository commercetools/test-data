import { Transformer } from '@commercetools-test-data/core';
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
  }),
};

export default transformers;
