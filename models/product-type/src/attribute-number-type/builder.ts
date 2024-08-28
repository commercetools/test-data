import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TAttributeNumberType,
  TCreateAttributeNumberTypeBuilder,
} from './types';

const Model: TCreateAttributeNumberTypeBuilder = () =>
  Builder<TAttributeNumberType>({
    generator,
    transformers,
  });

export default Model;
