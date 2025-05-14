import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type { TFieldDefinition, TCreateFieldDefinitionBuilder } from './types';

const Model: TCreateFieldDefinitionBuilder = () =>
  Builder<TFieldDefinition>({
    generator,
    transformers,
  });

export default Model;
