import { Builder } from '../../../core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldDateType,
  TCreateCustomFieldDateTypeBuilder,
} from './types';

const Model: TCreateCustomFieldDateTypeBuilder = () =>
  Builder<TCustomFieldDateType>({
    generator,
    transformers,
  });

export default Model;
