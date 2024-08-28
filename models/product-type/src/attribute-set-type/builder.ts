import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import type { TAttributeSetType, TCreateAttributeSetTypeBuilder } from './types';

const Model: TCreateAttributeSetTypeBuilder = () =>
  Builder<TAttributeSetType>({
    generator,
    transformers,
  });

export default Model;
