import { Generator } from '@/core';
import { TAttributeLocalizableTextType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

const generator = Generator<TAttributeLocalizableTextType>({
  fields: {
    name: 'ltext',
  },
});

export default generator;
