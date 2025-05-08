import { fake, Generator, oneOf } from '../../../../core';
import {
  AddressDraft,
  KeyReferenceDraft,
} from '../../../commons';
import { status, storeMode, unitType, associateMode } from '../constants';
import type { TDivisionDraft } from '../types';

// https://docs.commercetools.com/api/projects/business-units#divisiondraft

const generator = Generator<TDivisionDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf(...Object.values(status)),
    stores: [],
    storeMode: storeMode.FromParent,
    unitType: unitType.Division,
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    associateMode: associateMode.ExplicitAndFromParent,
    associates: [],
    addresses: fake(() => [AddressDraft.random()]),
    shippingAddresses: [0],
    defaultShippingAddress: 0,
    billingAddresses: [0],
    defaultBillingAddress: 0,
    custom: null,
    parentUnit: fake(() => KeyReferenceDraft.random().typeId('business-unit')),
  },
});

export default generator;
