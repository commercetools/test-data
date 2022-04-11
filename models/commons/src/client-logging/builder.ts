import { Builder } from '@commercetools-test-data/core';
import type { TCreateClientLoggingBuilder, TClientLogging } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateClientLoggingBuilder = () =>
  Builder<TClientLogging>({
    generator,
    transformers,
  });

export default Model;
