import { Generator } from '@commercetools-test-data/core';
import type { TAttributeLocalizableTextType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

const generator = Generator<TAttributeLocalizableTextType>({
  fields: {
    name: 'ltext',
  },
});

export default generator;
