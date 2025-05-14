import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributeLocalizedEnumType,
  TCreateAttributeLocalizedEnumTypeBuilder,
} from './types';

const Model: TCreateAttributeLocalizedEnumTypeBuilder = () =>
  Builder<TAttributeLocalizedEnumType>({
    generator,
    transformers,
  });

export default Model;
