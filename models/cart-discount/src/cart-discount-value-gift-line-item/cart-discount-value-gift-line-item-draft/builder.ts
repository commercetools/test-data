import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateCartDiscountValueGiftLineItemDraftBuilder,
  TCartDiscountValueGiftLineItemDraft,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountValueGiftLineItemDraftBuilder = () =>
  Builder<TCartDiscountValueGiftLineItemDraft>({
    generator,
    transformers,
  });

export default Model;
