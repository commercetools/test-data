import { Transformer } from '@commercetools-test-data/core';
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
    addFields: () => ({
      __typename: 'ProductDiscountValueExternalDraft',
    }),
  }),
};

export default transformers;
