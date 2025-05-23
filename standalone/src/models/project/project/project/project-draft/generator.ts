import { fake, Generator } from '@/core';
import type { TProjectDraft } from '../types';

const generator = Generator<TProjectDraft>({
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.lorem.words()),
    countries: fake(() => ['EN']),
    currencies: fake(() => ['EUR']),
    languages: fake(() => ['en']),
    ownerId: fake((f) => f.string.uuid()),
  },
});

export default generator;
