import { fake, Generator } from '@commercetools-test-data/core';
import { TAttributeLocalizedString } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizabletexttype

const generator = Generator<TAttributeLocalizedString>({
  fields: {
    name: 'ltext',
  },
});

export default generator;
