import { fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { LocalizedField } from '../../commons';
import type { TCustomApplicationSubmenuLink } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationSubmenuLink>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
    uriPath: fake((f) => f.lorem.word()),
  },
});

export default generator;
