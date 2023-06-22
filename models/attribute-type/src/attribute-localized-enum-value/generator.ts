import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TAttributeLocalizedEnumValue } from './types';

// https://docs.commercetools.com/api/projects/productTypes#attributelocalizedenumvalue

const generator = Generator<TAttributeLocalizedEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedString.random()),
  },
});

export default generator;
