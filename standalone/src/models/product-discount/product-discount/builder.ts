import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TProductDiscount, TCreateProductDiscountBuilder } from './types';

const Model: TCreateProductDiscountBuilder = () =>
  Builder<TProductDiscount>({
    generator,
    transformers,
  });

export default Model;
