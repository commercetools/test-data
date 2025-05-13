import { fake, Generator, sequence } from '@/core';
import { ClientLogging } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import { TAssociateRole } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TAssociateRole>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.string.alphanumeric(10)),
    buyerAssignable: fake((f) => f.datatype.boolean()),
    name: fake((f) => f.string.alphanumeric(15)),
    permissions: [],
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
