import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTypeBuilder, TType } from './types';

const Model: TCreateTypeBuilder = () =>
  Builder<TType>({
    generator,
    transformers,
  });

export default Model;
