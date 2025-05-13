import { fake, Generator } from '@/core';
import { LocalizedField } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TCustomApplicationMenuLink } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationMenuLink>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    labelAllLocales: fake(() => [LocalizedField.random()]),
    defaultLabel: fake((f) => f.lorem.word()),
    permissions: [],
    icon: '<svg><path fill="#000000" /></svg>',
  },
});

export default generator;
