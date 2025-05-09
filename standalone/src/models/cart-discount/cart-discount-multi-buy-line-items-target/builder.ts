import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountMultiBuyLineItemsTargetBuilder,
  TCartDiscountMultiBuyLineItemsTarget,
} from './types';

const Model: TCreateCartDiscountMultiBuyLineItemsTargetBuilder = () =>
  Builder<TCartDiscountMultiBuyLineItemsTarget>({
    generator,
    transformers,
  });

export default Model;
