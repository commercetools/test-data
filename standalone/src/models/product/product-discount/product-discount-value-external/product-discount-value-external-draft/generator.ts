import { Generator } from '@/core';
import { TProductDiscountValueExternalDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueexternaldraft

const generator = Generator<TProductDiscountValueExternalDraft>({
  fields: { type: 'external' },
});

export default generator;
