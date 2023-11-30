import { ClientLogging } from '@commercetools-test-data/commons';
import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TCustomObject } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();
const valueKey = fake((f) => f.string.alpha(5)) as unknown as string;

const generator = Generator<TCustomObject>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.string.alphanumeric(10)),
    container: fake((f) => f.string.alphanumeric(10)),
    value: {
      [valueKey]: {
        [valueKey]: fake((f) => f.string.alpha(7)),
      },
    },
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
