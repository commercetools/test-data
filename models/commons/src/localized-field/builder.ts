import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateLocalizedFieldBuilder, TLocalizedField } from './types';

const Model: TCreateLocalizedFieldBuilder = () =>
  Builder<TLocalizedField>({
    name: 'LocalizedField',
    generator,
    transformers,
  });

export default Model;
