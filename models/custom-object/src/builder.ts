import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCustomObject, TCreateCustomObjectBuilder } from './types';

const Model: TCreateCustomObjectBuilder = () =>
  Builder<TCustomObject>({
    generator,
    transformers,
  });

export default Model;
