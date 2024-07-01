import { Generator } from '@commercetools-test-data/core';
import { TAttributeNestedType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributenestedtype

const generator = Generator<TAttributeNestedType>({
  fields: {
    name: 'nested',
    typeRef: null,
  },
});

export default generator;
