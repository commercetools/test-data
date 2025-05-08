import { Builder } from '../../../core';
import { generator } from './generator';
import transformers from './transformers';
import {
  TCustomFieldStringType,
  TCreateCustomFieldStringTypeBuilder,
} from './types';

const Model: TCreateCustomFieldStringTypeBuilder = () =>
  Builder<TCustomFieldStringType>({
    generator,
    transformers,
  });

export default Model;
