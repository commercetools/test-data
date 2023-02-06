import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountValueGiftLineItemBuilder,
  TCartDiscountValueGiftLineItem,
} from './types';

const Model: TCreateCartDiscountValueGiftLineItemBuilder = () =>
  Builder<TCartDiscountValueGiftLineItem>({
    generator,
    transformers,
  });

export default Model;
