import { fake, Generator } from '@commercetools-test-data/core';
import type { TTeamDraft } from '../types';

const generator = Generator<TTeamDraft>({
  fields: {
    name: fake((f) => f.company.name()),
    members: [], // TODO: update when user model is ready
  },
});

export default generator;
