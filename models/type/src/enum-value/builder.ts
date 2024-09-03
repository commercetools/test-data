import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TCreateEnumValueBuilder, TEnumValue } from './types';

const Model: TCreateEnumValueBuilder = () =>
  Builder<TEnumValue>({
    generator,
    transformers,
  });

export default Model;
