import { AddressDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import type { TBusinessUnitDraft } from '../../types';

// https://docs.commercetools.com/api/projects/business-units#businessunitdraft

//This

const generator = Generator<TBusinessUnitDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf('Active', 'Inactive'),
    stores: null,
    storeMode: null,
    unitType: 'Division',
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    associateMode: oneOf('Explicit', 'ExplicitAndFromParent'),
    associates: null,
    addresses: fake(() => [AddressDraft.random()]),
    shippingAddresses: null,
    defaultShippingAddress: null,
    billingAddresses: null,
    defaultBillingAddress: null,
    custom: null,
  },
});

export default generator;

// Created on: 06/29/2023 9:48 AM
// Name: Mountain Retreats
// Key: pangolin-mountain-retreats
// Contact email address; mountain.retreats@pangolin.com
// Business unit type; Division
// Top level unit: Pangolin Holdings Group
// Parent unit; Coastal NC Rentals
// Stores linked to this business unit
