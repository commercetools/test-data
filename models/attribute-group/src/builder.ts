import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';
import { TAttributeGroup, TCreateAttributeGroupBuilder } from './types';

const Model: TCreateAttributeGroupBuilder = () =>
  Builder<TAttributeGroup>({
    generator,
    transformers,
  });

export default Model;