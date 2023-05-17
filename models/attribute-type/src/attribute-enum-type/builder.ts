import { Builder } from '@commercetools-test-data/core';
import { generator } from './generator';
import transformers from './transformers';
import { TAttributeEnumType, TCreateAttributeEnumTypeBuilder } from './types';

const Model: TCreateAttributeEnumTypeBuilder = () =>
  Builder<TAttributeEnumType>({
    generator,
    transformers,
  });

export default Model;
