import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldDateType,
  TCreateCustomFieldDateTypeBuilder,
} from './types';

const Model: TCreateCustomFieldDateTypeBuilder = () =>
  Builder<TCustomFieldDateType>({
    generator,
    transformers,
  });

export default Model;
