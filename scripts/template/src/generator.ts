import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';

const [getOlderDate] = createRelatedDates();

const generator = Generator({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
  },
});

export default generator;
