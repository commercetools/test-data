import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TOrder, TCreateOrderBuilder } from './types';

const Model: TCreateOrderBuilder = () =>
  Builder<TOrder>({
    generator,
    transformers,
  });

export default Model;
