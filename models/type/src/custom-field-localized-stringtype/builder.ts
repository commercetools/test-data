import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TCustomFieldLocalizedStringType,
  TCreateCustomFieldLocalizedStringTypeBuilder,
} from './types';

const Model: TCreateCustomFieldLocalizedStringTypeBuilder = () =>
  Builder<TCustomFieldLocalizedStringType>({
    generator,
    transformers,
  });

export default Model;
