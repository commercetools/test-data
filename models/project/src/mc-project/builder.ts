import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateMcProjectBuilder, TMcProject } from './types';

const Model: TCreateMcProjectBuilder = () =>
  Builder<TMcProject>({
    generator,
    transformers,
  });

export default Model;
