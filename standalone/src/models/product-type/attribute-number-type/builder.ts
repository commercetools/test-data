import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TAttributeNumberType,
  TCreateAttributeNumberTypeBuilder,
} from './types';

const Model: TCreateAttributeNumberTypeBuilder = () =>
  Builder<TAttributeNumberType>({
    generator,
    transformers,
  });

export default Model;
