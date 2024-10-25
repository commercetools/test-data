import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCartDiscountCustomLineItemsTarget,
  TCreateCartDiscountCustomLineItemsTargetBuilder,
} from './types';

const Model: TCreateCartDiscountCustomLineItemsTargetBuilder = () =>
  Builder<TCartDiscountCustomLineItemsTarget>({
    generator,
    transformers,
  });

export default Model;
