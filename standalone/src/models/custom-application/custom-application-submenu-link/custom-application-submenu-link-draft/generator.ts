import { fake, Generator } from '../../../../core';
import { LocalizedField } from '../../../commons';
import type { TCustomApplicationSubmenuLinkDraft } from '../types';

const generator = Generator<TCustomApplicationSubmenuLinkDraft>({
  fields: {
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
    uriPath: fake((f) => f.lorem.word()),
  },
});

export default generator;
