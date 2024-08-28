import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TAttributeReferenceType,
  TCreateAttributeReferenceTypeBuilder,
} from './types';

const Model: TCreateAttributeReferenceTypeBuilder = () =>
  Builder<TAttributeReferenceType>({
    generator,
    transformers,
  });

export default Model;
