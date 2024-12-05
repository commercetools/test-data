import type { FieldType } from '@commercetools/platform-sdk';
import { fake, Generator } from '@commercetools-test-data/core';
import { typeNames } from './constants';

// https://docs.commercetools.com/api/projects/types#fieldtype
const generator = Generator<FieldType>({
  fields: {
    name: fake((f) => f.helpers.arrayElement(typeNames)),
    elementType: null,
    values: null,
    referenceTypeId: null,
  },
});

export default generator;
