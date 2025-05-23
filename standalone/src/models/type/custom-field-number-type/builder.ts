import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldNumberType,
  TCreateCustomFieldNumberTypeBuilder,
} from './types';

const Model: TCreateCustomFieldNumberTypeBuilder = () =>
  Builder<TCustomFieldNumberType>({
    generator,
    transformers,
  });

export default Model;
