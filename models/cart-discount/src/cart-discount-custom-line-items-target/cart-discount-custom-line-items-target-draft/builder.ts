import { Builder } from '@commercetools-test-data/core';
import type {
  TCartDiscountCustomLineItemsTargetDraft,
  TCreateCartDiscountCustomLineItemsTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountCustomLineItemsTargetDraftBuilder = () =>
  Builder<TCartDiscountCustomLineItemsTargetDraft>({
    generator,
    transformers,
  });

export default Model;
