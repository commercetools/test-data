import { Builder } from '@commercetools-test-data/core';
import {
  TAttributeDateTimeType,
  TCreateAttributeDateTimeTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeDateTimeTypeDraftBuilder = () =>
  Builder<TAttributeDateTimeType>({
    generator,
    transformers,
  });

export default Model;
