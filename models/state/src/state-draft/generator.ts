import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { roles } from '../constants';
import { TStateDraft } from '../types';

// https://docs.commercetools.com/api/projects/states#statedraft

const generator = Generator<TStateDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    type: 'LineItemState',
    name: fake(() => LocalizedString.random()),
    description: fake(() => LocalizedString.random()),
    initial: fake((f) => f.datatype.boolean()),
    roles: [roles.Return],
    transitions: null,
  },
});

export default generator;
