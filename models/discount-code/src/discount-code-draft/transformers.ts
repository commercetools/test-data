import { Transformer } from '@commercetools-test-data/core';
import type { TDiscountCodeDraft, TDiscountCodeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TDiscountCodeDraft, TDiscountCodeDraft>('default', {
    buildFields: ['name', 'description'],
  }),
  rest: Transformer<TDiscountCodeDraft, TDiscountCodeDraft>('rest', {
    buildFields: ['name', 'description'],
  }),
  graphql: Transformer<TDiscountCodeDraft, TDiscountCodeDraftGraphql>(
    'graphql',
    {
      buildFields: ['name', 'description'],
      addFields: () => ({
        __typename: 'DiscountCodeDraft',
      }),
    }
  ),
};

export default transformers;
