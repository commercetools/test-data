import { fake, Generator, oneOf } from '@/core';
import { AddressDraft } from '@/models/commons';
import { status, storeMode, unitType, associateMode } from '../constants';
import type { TCompanyDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#companydraft

const generator = Generator<TCompanyDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf(...Object.values(status)),
    stores: [],
    storeMode: storeMode.Explicit,
    unitType: unitType.Company,
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    associateMode: associateMode.Explicit,
    associates: [],
    addresses: fake(() => [AddressDraft.random()]),
    shippingAddresses: [0],
    defaultShippingAddress: 0,
    billingAddresses: [0],
    defaultBillingAddress: 0,
    custom: null,
  },
});

export default generator;
