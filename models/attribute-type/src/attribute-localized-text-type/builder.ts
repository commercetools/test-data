import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import {
  TAttributeLocalizedString,
  TCreateAttributeLocalizedTextTypeBuilder,
} from './types';

const Model: TCreateAttributeLocalizedTextTypeBuilder = () =>
  Builder<TAttributeLocalizedString>({
    generator,
    transformers,
  });

export default Model;
