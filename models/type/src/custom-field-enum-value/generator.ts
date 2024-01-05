import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { type TCustomFieldEnumValue } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldenumvalue

const generator = Generator<TCustomFieldEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake(() => LocalizedString.random()),
  },
});

export default generator;
