import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCreateLocalizedEnumValueBuilder,
  TLocalizedEnumValue,
} from './types';

const Model: TCreateLocalizedEnumValueBuilder = () =>
  Builder<TLocalizedEnumValue>({
    generator,
    transformers,
  });

export default Model;