import {
  ClientLogging,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { roles } from './constants';
import { TState } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/States#States

const generator = Generator<TState>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    type: 'LineItemState',
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    initial: fake((f) => f.datatype.boolean()),
    builtIn: fake((f) => f.datatype.boolean()),
    roles: [roles.Return],
    transitions: [],
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
