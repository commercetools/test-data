import { fake, Generator } from '@commercetools-test-data/core';
import { AttributeBooleanType } from '../attribute-boolean-type';
import { TAttributeSetType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributesettype

const generator = Generator<TAttributeSetType>({
  fields: {
    name: 'set',
    elementType: fake(() => AttributeBooleanType.random()),
  },
});

export default generator;
