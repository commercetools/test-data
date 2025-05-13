import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueRelativeBuilder,
  TProductDiscountValueRelative,
} from './types';

const Model: TCreateProductDiscountValueRelativeBuilder = () =>
  Builder<TProductDiscountValueRelative>({
    generator,
    transformers,
  });

export default Model;
