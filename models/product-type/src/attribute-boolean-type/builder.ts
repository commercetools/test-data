import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TAttributeBooleanType,
  TCreateAttributeBooleanTypeBuilder,
} from './types';

const Model: TCreateAttributeBooleanTypeBuilder = () =>
  Builder<TAttributeBooleanType>({
    generator,
    transformers,
  });

export default Model;
