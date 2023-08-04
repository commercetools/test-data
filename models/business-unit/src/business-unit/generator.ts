import { Address, ClientLogging } from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import type { TBusinessUnit } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/business-units#businessunit

const generator = Generator<TBusinessUnit>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf('Active', 'Inactive'),
    stores: null,
    storeMode: oneOf('Explicit', 'FromParent'),
    unitType: oneOf('Company', 'Division'),
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    addresses: fake(() => [Address.random()]),
    shippingAddressIds: null,
    defaultShippingAddressId: null,
    billingAddressIds: null,
    defaultBillingAddressId: null,
    associateMode: oneOf('Explicit', 'ExplicitFromParent'),
    associates: [],
    inheritedAssociates: [],
    parentUnit: null,
    topLevelUnit: null,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
