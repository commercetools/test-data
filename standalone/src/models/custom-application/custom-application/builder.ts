import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomApplication,
  TCreateCustomApplicationBuilder,
} from './types';

const Model: TCreateCustomApplicationBuilder = () =>
  Builder<TCustomApplication>({
    generator,
    transformers,
  });

export default Model;
