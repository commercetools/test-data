import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TAttributeDateTimeType,
  TCreateAttributeDateTimeTypeBuilder,
} from './types';

const Model: TCreateAttributeDateTimeTypeBuilder = () =>
  Builder<TAttributeDateTimeType>({
    generator,
    transformers,
  });

export default Model;