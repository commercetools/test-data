import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateProductDiscountValueExternalBuilder,
  TProductDiscountValueExternal,
} from './types';

const Model: TCreateProductDiscountValueExternalBuilder = () =>
  Builder<TProductDiscountValueExternal>({
    generator,
    transformers,
  });

export default Model;
