import { Builder } from '@commercetools-test-data/core';
import {
  TAttributePlainEnumValue,
  TCreateAttributePlainEnumValueBuilder,
} from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAttributePlainEnumValueBuilder = () =>
  Builder<TAttributePlainEnumValue>({
    generator,
    transformers,
  });

export default Model;
