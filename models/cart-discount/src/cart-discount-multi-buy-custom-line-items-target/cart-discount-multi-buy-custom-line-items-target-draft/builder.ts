import { Builder } from '@commercetools-test-data/core';
import type {
  TCartDiscountMultiBuyCustomLineItemsTargetDraft,
  TCreateCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountMultiBuyCustomLineItemsTargetDraftBuilder =
  () =>
    Builder<TCartDiscountMultiBuyCustomLineItemsTargetDraft>({
      generator,
      transformers,
    });

export default Model;
