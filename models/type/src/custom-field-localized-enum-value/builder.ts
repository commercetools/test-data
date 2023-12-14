import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomFieldLocalizedEnumValue,
  TCreateCustomFieldLocalizedEnumValueBuilder,
} from './types';

const Model: TCreateCustomFieldLocalizedEnumValueBuilder = () =>
  Builder<TCustomFieldLocalizedEnumValue>({
    generator,
    transformers,
  });

export default Model;
