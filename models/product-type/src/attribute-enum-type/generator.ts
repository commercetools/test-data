import { fake, Generator } from '@commercetools-test-data/core';
import * as AttributePlainEnumValue from '../attribute-plain-enum-value';
import { TAttributeEnumType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributeenumtype

export const generator = Generator<TAttributeEnumType>({
  fields: {
    name: 'enum',
    values: fake((f) => [AttributePlainEnumValue.random()]),
  },
});
