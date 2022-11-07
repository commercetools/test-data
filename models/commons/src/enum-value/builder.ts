import { Builder } from '@commercetools-test-data/core';
import type { TCreateEnumValueBuilder, TEnumValue } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateEnumValueBuilder = () =>
  Builder<TEnumValue>({
    generator,
    transformers,
  });

export default Model;
