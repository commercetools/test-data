import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TAttributeLocalizedEnumValue,
  TCreateAttributeLocalizedEnumValueBuilder,
} from './types';

const Model: TCreateAttributeLocalizedEnumValueBuilder = () =>
  Builder<TAttributeLocalizedEnumValue>({
    generator,
    transformers,
  });

export default Model;
