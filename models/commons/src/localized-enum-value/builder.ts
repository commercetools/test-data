import { Builder } from '@commercetools-test-data/core';
import type {
  TCreateLocalizedEnumValueBuilder,
  TLocalizedEnumValue,
} from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateLocalizedEnumValueBuilder = () =>
  Builder<TLocalizedEnumValue>({
    generator,
    transformers,
  });

export default Model;
