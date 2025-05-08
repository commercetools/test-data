import {
  sequence,
  fake,
  Generator,
  oneOf,
} from '../../core';
import { createRelatedDates } from '../../utils';
import {
  ClientLogging,
  LocalizedString,
} from '../commons';
import { roles, type } from './constants';
import { TState } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/states#state

const generator = Generator<TState>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    type: oneOf(...Object.values(type)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    initial: fake((f) => f.datatype.boolean()),
    builtIn: fake((f) => f.datatype.boolean()),
    roles: [oneOf(...Object.values(roles))],
    transitions: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
