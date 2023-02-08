import { Transformer } from '@commercetools-test-data/core';
import type {
  TProductDiscountDraft,
  TProductDiscountDraftGraphql,
} from '../types';

const transformers = {
  default: Transformer<TProductDiscountDraft, TProductDiscountDraft>(
    'default',
    { buildFields: ['value', 'name', 'description'] }
  ),
  rest: Transformer<TProductDiscountDraft, TProductDiscountDraft>('rest', {
    buildFields: ['value', 'name', 'description'],
  }),
  graphql: Transformer<TProductDiscountDraft, TProductDiscountDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'name', 'description'],
      addFields: () => ({
        __typename: 'ProductDiscountDraft',
      }),
    }
  ),
};

export default transformers;
