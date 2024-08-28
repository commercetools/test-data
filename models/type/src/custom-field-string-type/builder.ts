import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldStringType,
  TCreateCustomFieldStringTypeBuilder,
} from './types';

const Model: TCreateCustomFieldStringTypeBuilder = () =>
  Builder<TCustomFieldStringType>({
    generator,
    transformers,
  });

export default Model;
