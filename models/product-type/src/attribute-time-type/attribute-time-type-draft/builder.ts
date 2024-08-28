import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeTimeType,
  TCreateAttributeTimeTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeTimeTypeDraftBuilder = () =>
  Builder<TAttributeTimeType>({
    generator,
    transformers,
  });

export default Model;
