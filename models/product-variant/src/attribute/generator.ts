import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TAttribute } from './types';

// https://docs.commercetools.com/api/projects/products#attribute

const generator = Generator<TAttribute>({
  fields: {
    name: fake((f) => f.lorem.slug(3)),
    // `value` is an overloaded field. It might be best to create your own.
    value: null,
    attributeDefinition: fake(() => AttributeDefinition.random()),
    referencedResource: null,
    referencedResourceSet: [],
  },
});

export default generator;
