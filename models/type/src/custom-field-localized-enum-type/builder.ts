import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomFieldLocalizedEnumType,
  TCreateCustomFieldLocalizedEnumTypeBuilder,
} from './types';

const Model: TCreateCustomFieldLocalizedEnumTypeBuilder = () =>
  Builder<TCustomFieldLocalizedEnumType>({
    generator,
    transformers,
  });

export default Model;
