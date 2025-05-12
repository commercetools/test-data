import { Generator } from '../../../../core';
import { TAttributeDateTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#attributedatetype

export const generator = Generator<TAttributeDateTypeDraft>({
  fields: {
    name: 'date',
  },
});
