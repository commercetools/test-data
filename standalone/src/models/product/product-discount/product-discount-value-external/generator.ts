import { Generator } from '@/core';
import { TProductDiscountValueExternal } from './types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountvalueexternal

const generator = Generator<TProductDiscountValueExternal>({
  fields: { type: 'external' },
});

export default generator;
