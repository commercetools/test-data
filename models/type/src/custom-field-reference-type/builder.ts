import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import type {
  TCustomFieldReferenceType,
  TCreateCustomFieldReferenceTypeBuilder,
} from './types';

const Model: TCreateCustomFieldReferenceTypeBuilder = () =>
  Builder<TCustomFieldReferenceType>({
    generator,
    transformers,
  });

export default Model;
