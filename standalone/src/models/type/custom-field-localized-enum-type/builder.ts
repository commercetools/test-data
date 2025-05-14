import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomFieldLocalizedEnumType,
  TCreateCustomFieldLocalizedEnumTypeBuilder,
} from './types';

const Model: TCreateCustomFieldLocalizedEnumTypeBuilder = () =>
  Builder<TCustomFieldLocalizedEnumType>({
    generator,
    transformers,
  });

export default Model;
