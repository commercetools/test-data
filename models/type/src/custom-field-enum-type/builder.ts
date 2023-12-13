import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldEnumType,
  TCreateCustomFieldEnumTypeBuilder,
} from './types';

const Model: TCreateCustomFieldEnumTypeBuilder = () =>
  Builder<TCustomFieldEnumType>({
    generator,
    transformers,
  });

export default Model;
