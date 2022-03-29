import type { TCreateReferenceBuilder, TReference } from './types';

import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateReferenceBuilder = () =>
  Builder<TReference>({
    generator,
    transformers,
  });

export default Model;
