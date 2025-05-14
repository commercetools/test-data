import { Builder } from '@/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomFieldEnumValue,
  TCreateCustomFieldEnumValueBuilder,
} from './types';

const Model: TCreateCustomFieldEnumValueBuilder = () =>
  Builder<TCustomFieldEnumValue>({
    generator,
    transformers,
  });

export default Model;
