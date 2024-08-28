import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TAttributeBooleanType,
  TCreateAttributeBooleanTypeBuilder,
} from './types';

const Model: TCreateAttributeBooleanTypeBuilder = () =>
  Builder<TAttributeBooleanType>({
    generator,
    transformers,
  });

export default Model;
