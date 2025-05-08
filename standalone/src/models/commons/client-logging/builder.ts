import { Builder } from '../../../core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateClientLoggingBuilder, TClientLogging } from './types';

const Model: TCreateClientLoggingBuilder = () =>
  Builder<TClientLogging>({
    name: 'ClientLogging',
    generator,
    transformers,
  });

export default Model;
