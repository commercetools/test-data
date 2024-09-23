import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateDiscountedPriceDraftBuilder,
  TDiscountedProductPriceDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const AddressDraft: TCreateDiscountedPriceDraftBuilder = () =>
  Builder<TDiscountedProductPriceDraft>({
    generator,
    transformers,
  });

export default AddressDraft;
