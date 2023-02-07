import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateCartDiscountValueFixedBuilder,
  TCartDiscountValueFixed,
} from './types';

const Model: TCreateCartDiscountValueFixedBuilder = () =>
  Builder<TCartDiscountValueFixed>({
    generator,
    transformers,
  });

export default Model;
