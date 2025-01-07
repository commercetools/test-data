import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateKeyReferenceBuilder, TKeyReference } from './types';

const Model: TCreateKeyReferenceBuilder = () =>
  Builder<TKeyReference>({
    name: 'KeyReference',
    generator,
    transformers,
  });

export default Model;
