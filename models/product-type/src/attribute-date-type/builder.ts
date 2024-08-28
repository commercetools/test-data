import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type { TAttributeDateType, TCreateAttributeDateTypeBuilder } from './types';

const Model: TCreateAttributeDateTypeBuilder = () =>
  Builder<TAttributeDateType>({
    generator,
    transformers,
  });

export default Model;
