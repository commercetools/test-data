import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TAttributeReferenceType,
  TCreateAttributeReferenceTypeBuilder,
} from './types';

const Model: TCreateAttributeReferenceTypeBuilder = () =>
  Builder<TAttributeReferenceType>({
    generator,
    transformers,
  });

export default Model;
