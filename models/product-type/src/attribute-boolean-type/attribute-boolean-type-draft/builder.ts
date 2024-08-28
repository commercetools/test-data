import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeBooleanType,
  TCreateAttributeBooleanTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeBooleanTypeDraftBuilder = () =>
  Builder<TAttributeBooleanType>({
    generator,
    transformers,
  });

export default Model;
