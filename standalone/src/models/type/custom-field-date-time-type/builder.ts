import { Builder } from '@/core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldDateTimeType,
  TCreateCustomFieldDateTimeTypeBuilder,
} from './types';

const Model: TCreateCustomFieldDateTimeTypeBuilder = () =>
  Builder<TCustomFieldDateTimeType>({
    generator,
    transformers,
  });

export default Model;
