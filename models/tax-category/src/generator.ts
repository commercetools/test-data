import { sequence, fake, Generator } from '@commercetools-test-data/core';
import { TTaxCategory } from './types';
import { ClientLogging } from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { random } from '@commercetools-test-data/tax-rate';

//https://docs.commercetools.com/api/projects/taxCategories#taxcategory

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TTaxCategory>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    rates: fake(() => [random()]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
