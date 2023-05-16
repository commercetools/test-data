import { Transformer } from '@commercetools-test-data/core';
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
  }),
};

export default transformers;
