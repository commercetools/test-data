import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributeNestedType,
  TCreateAttributeNestedTypeBuilder,
} from './types';

const Model: TCreateAttributeNestedTypeBuilder = () =>
  Builder<TAttributeNestedType>({
    generator,
    transformers,
  });

export default Model;
