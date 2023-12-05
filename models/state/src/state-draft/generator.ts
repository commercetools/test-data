import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { roles, type } from '../constants';
import { TStateDraft } from '../types';

// https://docs.commercetools.com/api/projects/states#statedraft

const generator = Generator<TStateDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    type: oneOf(...Object.values(type)),
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    initial: fake((f) => f.datatype.boolean()),
    roles: [roles.Return],
    transitions: null,
  },
});

export default generator;
