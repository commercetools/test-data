import { Transformer } from '@commercetools-test-data/core';
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
    addFields: () => ({
      __typename: 'CartDiscountValueFixedDraft',
    }),
  }),
};

export default transformers;
