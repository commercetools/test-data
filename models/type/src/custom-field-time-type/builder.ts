import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldTimeType,
  TCreateCustomFieldTimeTypeBuilder,
} from './types';

const Model: TCreateCustomFieldTimeTypeBuilder = () =>
  Builder<TCustomFieldTimeType>({
    generator,
    transformers,
  });

export default Model;
