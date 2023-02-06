import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountValueAbsoluteBuilder,
  TCartDiscountValueAbsolute,
} from './types';

const Model: TCreateCartDiscountValueAbsoluteBuilder = () =>
  Builder<TCartDiscountValueAbsolute>({
    generator,
    transformers,
  });

export default Model;
