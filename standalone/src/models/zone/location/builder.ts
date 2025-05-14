import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import { TLocation, TCreateLocationBuilder } from './types';

const Model: TCreateLocationBuilder = () =>
  Builder<TLocation>({
    generator,
    transformers,
  });

export default Model;
