import { Generator } from '@commercetools-test-data/core';
import { TProductDiscountDraft } from '../types';

// https://docs.commercetools.com/api/projects/productDiscounts#productdiscountdraft

const generator = Generator<TProductDiscountDraft>({
  fields: {},
});

export default generator;
