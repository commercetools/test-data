import { Builder } from '@commercetools-test-data/core';
import type {
  TAttributeEnumType,
  TCreateAttributeEnumTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeEnumTypeDraftBuilder = () =>
  Builder<TAttributeEnumType>({
    generator,
    transformers,
  });

export default Model;
