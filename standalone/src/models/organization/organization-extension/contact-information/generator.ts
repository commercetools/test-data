import { fake, Generator } from '../../../../core';
import { createRelatedDates } from '../../../../utils';
import type { TContactInformation } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TContactInformation>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    email: fake((f) => f.internet.email()),
    verifiedEmail: fake((f) => f.internet.email()),
  },
});

export default generator;
