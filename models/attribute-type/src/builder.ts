import { Builder } from '@commercetools-test-data/core';
import { TAttributeType, TCreateAttributeTypeBuilder } from './types';
import generator from './generator';
import transformers from './transformers';

const Model: TCreateAttributeTypeBuilder = () =>
  Builder<TAttributeType>({
    generator,
    transformers,
  });

export default Model;
