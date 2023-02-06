import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateReferenceBuilder, TReference } from './types';

const Model: TCreateReferenceBuilder = () =>
  Builder<TReference>({
    generator,
    transformers,
  });

export default Model;
