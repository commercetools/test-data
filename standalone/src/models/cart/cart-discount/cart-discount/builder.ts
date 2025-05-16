import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCartDiscount, TCreateCartDiscountBuilder } from './types';

const Model: TCreateCartDiscountBuilder = () =>
  Builder<TCartDiscount>({
    generator,
    transformers,
  });

export default Model;
