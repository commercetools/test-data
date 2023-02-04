import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateImageBuilder, TImage } from './types';

const Model: TCreateImageBuilder = () =>
  Builder<TImage>({
    generator,
    transformers,
  });

export default Model;
