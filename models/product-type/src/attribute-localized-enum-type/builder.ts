import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type {
  TAttributeLocalizedEnumType,
  TCreateAttributeLocalizedEnumTypeBuilder,
} from './types';

const Model: TCreateAttributeLocalizedEnumTypeBuilder = () =>
  Builder<TAttributeLocalizedEnumType>({
    generator,
    transformers,
  });

export default Model;
