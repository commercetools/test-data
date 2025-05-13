import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateFieldTypeBuilder, TFieldType } from './types';

const Model: TCreateFieldTypeBuilder = () =>
  Builder<TFieldType>({
    generator,
    transformers,
  });

export default Model;
