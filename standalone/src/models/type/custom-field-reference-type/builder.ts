import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldReferenceType,
  TCreateCustomFieldReferenceTypeBuilder,
} from './types';

const Model: TCreateCustomFieldReferenceTypeBuilder = () =>
  Builder<TCustomFieldReferenceType>({
    generator,
    transformers,
  });

export default Model;
