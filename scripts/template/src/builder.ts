import { Builder } from '@commercetools-test-data/core';
import generator from './generator';
import transformers from './transformers';

const AttributeGroup = () =>
  Builder({
    generator,
    transformers,
  });

export default AttributeGroup;
