import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueAbsoluteBuilder,
  TProductDiscountValueAbsolute,
} from './types';

const Model: TCreateProductDiscountValueAbsoluteBuilder = () =>
  Builder<TProductDiscountValueAbsolute>({
    generator,
    transformers,
  });

export default Model;
