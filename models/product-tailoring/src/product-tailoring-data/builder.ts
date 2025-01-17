import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TProductTailoringData } from './types';

const model = () =>
  Builder<TProductTailoringData>({
    generator,
    transformers,
  });

export default model;
