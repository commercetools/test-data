import { Builder } from '../../../../core';
import type {
  TCartDiscountMultiBuyLineItemsTargetDraft,
  TCreateCartDiscountMultiBuyLineItemsTargetDraftBuilder,
} from '../types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateCartDiscountMultiBuyLineItemsTargetDraftBuilder = () =>
  Builder<TCartDiscountMultiBuyLineItemsTargetDraft>({
    generator,
    transformers,
  });

export default Model;
