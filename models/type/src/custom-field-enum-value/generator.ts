import { fake, Generator } from '@commercetools-test-data/core';
import { type TCustomFieldEnumValue } from './types';

// https://docs.commercetools.com/api/projects/types#customfieldenumvalue

const generator = Generator<TCustomFieldEnumValue>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    label: fake((f) => f.word.words({ count: { min: 3, max: 5 } })),
  },
});

export default generator;
