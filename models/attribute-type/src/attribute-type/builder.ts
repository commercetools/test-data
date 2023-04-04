import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TAttributeType, TCreateAttributeTypeBuilder } from './types';

const Model: TCreateAttributeTypeBuilder = () =>
  Builder<TAttributeType>({
    generator,
    transformers,
  });

export default Model;
