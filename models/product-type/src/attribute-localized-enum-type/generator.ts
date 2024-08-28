import { fake, Generator } from '@commercetools-test-data/core';
import * as AttributeLocalizedEnumValue from '../attribute-localized-enum-value';
import type { TAttributeLocalizedEnumType } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumtype

const generator = Generator<TAttributeLocalizedEnumType>({
  fields: {
    name: 'lenum',
    values: fake(() => [AttributeLocalizedEnumValue.random()]),
  },
});

export default generator;
