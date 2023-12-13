import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TCustomFieldLocalizedStringtype,
  TCreateCustomFieldLocalizedStringtypeBuilder,
} from './types';

const Model: TCreateCustomFieldLocalizedStringtypeBuilder = () =>
  Builder<TCustomFieldLocalizedStringtype>({
    generator,
    transformers,
  });

export default Model;
