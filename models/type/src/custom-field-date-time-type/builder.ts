import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldDateTimeType,
  TCreateCustomFieldDateTimeTypeBuilder,
} from './types';

const Model: TCreateCustomFieldDateTimeTypeBuilder = () =>
  Builder<TCustomFieldDateTimeType>({
    generator,
    transformers,
  });

export default Model;
