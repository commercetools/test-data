import { LocalizedField } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TCustomApplicationMenuLinkDraft } from '../types';

const generator = Generator<TCustomApplicationMenuLinkDraft>({
  fields: {
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
  },
});

export default generator;
