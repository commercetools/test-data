import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TAttributeDefault, TCreateAttributeBuilder } from './types';

const Model: TCreateAttributeBuilder = () =>
  Builder<TAttributeDefault>({
    generator,
    transformers,
  });

export default Model;
