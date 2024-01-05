import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldBooleanType,
  TCreateCustomFieldBooleanTypeBuilder,
} from './types';

const Model: TCreateCustomFieldBooleanTypeBuilder = () =>
  Builder<TCustomFieldBooleanType>({
    generator,
    transformers,
  });

export default Model;
