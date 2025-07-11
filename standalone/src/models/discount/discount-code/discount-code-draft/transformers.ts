import { Transformer } from '@/core';
import type { TDiscountCodeDraft, TDiscountCodeDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TDiscountCodeDraft, TDiscountCodeDraft>('default', {
    buildFields: ['name', 'description', 'cartDiscounts'],
  }),
  rest: Transformer<TDiscountCodeDraft, TDiscountCodeDraft>('rest', {
    buildFields: ['name', 'description', 'cartDiscounts'],
  }),
  graphql: Transformer<TDiscountCodeDraft, TDiscountCodeDraftGraphql>(
    'graphql',
    {
      buildFields: ['name', 'description', 'cartDiscounts'],
    }
  ),
};

export default transformers;
