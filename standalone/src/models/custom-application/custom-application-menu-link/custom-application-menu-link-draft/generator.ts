import { fake, Generator } from '@/core';
import { LocalizedField } from '@/models/commons';
import type { TCustomApplicationMenuLinkDraftGraphql } from './types';

const generator = Generator<TCustomApplicationMenuLinkDraftGraphql>({
  fields: {
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
  },
});

export default generator;
