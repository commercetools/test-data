import { Builder } from '@commercetools-test-data/core';
import { TPlainEnumValue, TCreatePlainEnumValueBuilder } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreatePlainEnumValueBuilder = () =>
  Builder<TPlainEnumValue>({
    generator,
    transformers,
  });

export default Model;
