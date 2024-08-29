import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateTypeDefinitionBuilder, TTypeDefinition } from './types';

const Model: TCreateTypeDefinitionBuilder = () =>
  Builder<TTypeDefinition>({
    generator,
    transformers,
  });

export default Model;
