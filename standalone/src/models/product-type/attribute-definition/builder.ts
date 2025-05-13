import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TAttributeDefinition,
  TCreateAttributeDefinitionBuilder,
} from './types';

const Model: TCreateAttributeDefinitionBuilder = () =>
  Builder<TAttributeDefinition>({
    generator,
    transformers,
  });

export default Model;
