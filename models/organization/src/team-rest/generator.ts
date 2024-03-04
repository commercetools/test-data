import { Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import type { TTeamRest } from './types';

const generator = Generator<TTeamRest>({
  fields: {
    id: fake((f) => f.string.uuid()),
    name: fake((f) => f.commerce.department()),
    members: fake(() => [Reference.random().typeId('user')]),
  },
});

export default generator;
