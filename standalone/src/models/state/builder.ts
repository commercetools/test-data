import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateStateBuilder, TState } from './types';

const Model: TCreateStateBuilder = () =>
  Builder<TState>({
    generator,
    transformers,
  });

export default Model;
