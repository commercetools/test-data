import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldTimeType,
  TCreateCustomFieldTimeTypeBuilder,
} from './types';

const Model: TCreateCustomFieldTimeTypeBuilder = () =>
  Builder<TCustomFieldTimeType>({
    generator,
    transformers,
  });

export default Model;
