import { sequence, fake, Generator } from '../../../core';
import { createRelatedDates } from '../../../utils';
import { ClientLogging } from '../../commons';
import * as TaxRate from '../tax-rate';
import type { TTaxCategory } from './types';

//https://docs.commercetools.com/api/projects/taxCategories#taxcategory

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TTaxCategory>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    name: fake((f) => f.lorem.words(2)),
    description: fake((f) => f.lorem.sentence()),
    rates: fake(() => [TaxRate.random()]),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
