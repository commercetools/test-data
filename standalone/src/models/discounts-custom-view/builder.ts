import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TDiscountsCustomView,
  TCreateDiscountsCustomViewBuilder,
} from './types';

const Model: TCreateDiscountsCustomViewBuilder = () =>
  Builder<TDiscountsCustomView>({
    generator,
    transformers,
  });

export default Model;
