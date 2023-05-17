import { AttributeEnumType } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { TAttributeType } from './types';

const typeWithNoAdditionalFieldsNames = [
  'boolean',
  'text',
  'ltext',
  'number',
  'money',
  'date',
  'time',
  'datetime',
];

// https://docs.commercetools.com/api/projects/productTypes#attributetype

export const generator = Generator<TAttributeType>({
  fields: {
    // Attribute types that will be generated are the ones with no additional fields
    // (with only the `name` field). If you want to generate attribute types with additional fields, use presets.
    name: fake((f) => f.helpers.arrayElement(typeWithNoAdditionalFieldsNames)),
  },
});

export const enumGenerator = Generator<AttributeEnumType>({
  fields: {
    name: 'enum',
    values: [],
  },
});
