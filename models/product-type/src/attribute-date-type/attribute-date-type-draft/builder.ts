import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeDateType,
  TCreateAttributeDateTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeDateTypeDraftBuilder = () =>
  Builder<TAttributeDateType>({
    generator,
    transformers,
  });

export default Model;
