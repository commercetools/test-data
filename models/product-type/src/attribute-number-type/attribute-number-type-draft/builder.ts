import { Builder } from '@commercetools-test-data/core';
import {
  TAttributeNumberType,
  TCreateAttributeNumberTypeDraftBuilder,
} from '../types';
import { generator } from './generator';
import transformers from './transformers';

const Model: TCreateAttributeNumberTypeDraftBuilder = () =>
  Builder<TAttributeNumberType>({
    generator,
    transformers,
  });

export default Model;
