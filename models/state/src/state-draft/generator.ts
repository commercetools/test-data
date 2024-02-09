import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { roles, type } from '../constants';
import { TStateDraft } from '../types';

// https://docs.commercetools.com/api/projects/states#statedraft

const generator = Generator<TStateDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    type: oneOf(...Object.values(type)),
    name: fake(() => LocalizedStringDraft.random()),
    description: fake(() => LocalizedStringDraft.random()),
    initial: fake((f) => f.datatype.boolean()),
    roles: [oneOf(...Object.values(roles))],
    transitions: null,
  },
});

export default generator;
