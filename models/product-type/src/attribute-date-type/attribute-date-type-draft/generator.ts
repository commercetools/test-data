import { Generator } from '@commercetools-test-data/core';
import { TAttributeDateTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

export const generator = Generator<TAttributeDateTypeDraft>({
  fields: {
    name: 'date',
  },
});
