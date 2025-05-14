import { fake, Generator } from '@/core';
import { LocalizedField } from '@/models/commons';
import type { TCustomApplicationMenuLinkDraft } from '../types';

const generator = Generator<TCustomApplicationMenuLinkDraft>({
  fields: {
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
  },
});

export default generator;
