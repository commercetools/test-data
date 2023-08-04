import { AddressDraft } from '@commercetools-test-data/commons';

import { fake, Generator } from '@commercetools-test-data/core';
import type { TBusinessUnitDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#businessunitdraft

const generator = Generator<TBusinessUnitDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    status: 'Active',
    stores: [],
    storeMode: 'Explicit',
    unitType: 'Company',
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    associateMode: 'Explicit',
    associates: null,
    addresses: fake(() => [AddressDraft.random()]),
    shippingAddresses: [],
    defaultShippingAddress: null,
    billingAddresses: [],
    defaultBillingAddress: null,
    custom: null,
  },
});

export default generator;
