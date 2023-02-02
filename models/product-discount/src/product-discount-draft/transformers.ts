import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductDiscountDraft, TProductDiscountDraft>(
    'default',
    { buildFields: [] }
  ),
  rest: Transformer<TProductDiscountDraft, TProductDiscountDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TProductDiscountDraft, TProductDiscountDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({ __typename: 'MoneyInput' }),
    }
  ),
};

export default transformers;
