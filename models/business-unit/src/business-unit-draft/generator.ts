import { AddressDraft } from '@commercetools-test-data/commons';

import { fake, Generator } from '@commercetools-test-data/core';
import type { TBusinessUnitDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#businessunitdraft

const generator = Generator<TBusinessUnitDraft>({
  fields: {
    // Business unit fields
    key: fake((f) => f.lorem.slug(2)),
    status: 'Active',
    name: fake((f) => f.lorem.words(2)),
    addresses: fake(() => [AddressDraft.random()]),
    associates: [],
    // TODO: where should topLevelUnit be??
    // topLevelUnit: null,

    // BusinessUnit fields
    storeMode: 'Explicit',
    unitType: 'BusinessUnit',
    // TODO: why does it not recognize associateMode in the SDK type?
    // associateMode: 'Explicit'
  },
});

export default generator;
