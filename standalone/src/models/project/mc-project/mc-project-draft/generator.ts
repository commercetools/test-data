import { fake, Generator } from '../../../../core';
import { TMcProjectDraft } from '../types';

const generator = Generator<TMcProjectDraft>({
  fields: {
    key: fake((f) => f.lorem.slug()),
    name: fake((f) => f.lorem.words()),
    countries: fake(() => ['EN']),
    currencies: fake(() => ['EUR']),
    languages: fake(() => ['en']),
    ownerId: fake((f) => f.string.uuid()),
    deleteDaysAfterCreation: null,
    messagesEnabled: null,
  },
});

export default generator;
