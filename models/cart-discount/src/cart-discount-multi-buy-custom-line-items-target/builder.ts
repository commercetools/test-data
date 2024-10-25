import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountMultiBuyCustomLineItemsTargetBuilder,
  TCartDiscountMultiBuyCustomLineItemsTarget,
} from './types';

const Model: TCreateCartDiscountMultiBuyCustomLineItemsTargetBuilder = () =>
  Builder<TCartDiscountMultiBuyCustomLineItemsTarget>({
    generator,
    transformers,
  });

export default Model;
