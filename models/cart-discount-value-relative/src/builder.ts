import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountValueRelativeBuilder,
  TCartDiscountValueRelative,
} from './types';

const Model: TCreateCartDiscountValueRelativeBuilder = () =>
  Builder<TCartDiscountValueRelative>({
    generator,
    transformers,
  });

export default Model;
