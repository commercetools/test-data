import { AddressDraft, ClientLogging } from '@commercetools-test-data/commons';

import { fake, Generator, sequence } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils/src';
import type { TBusinessUnit } from './types';

// https://docs.commercetools.com/api/projects/business-units#businessunit

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TBusinessUnit>({
  fields: {
    // Business unit fields
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    status: 'Active',
    name: fake((f) => f.lorem.words(2)),
    addresses: fake(() => [AddressDraft.random()]),
    associates: [],
    topLevelUnit: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),

    // BusinessUnit fields
    // TODO: do we need to add these to Business unit and just default them to a company or division values?
    //  (Company would be easier as companies can't have parents)
    storeMode: 'Explicit',
    unitType: 'BusinessUnit',
    // associateMode: 'Explicit'
  },
});

export default generator;
