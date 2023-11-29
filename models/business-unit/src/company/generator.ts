import {
  Address,
  ClientLogging,
  KeyReference,
} from '@commercetools-test-data/commons';
import {
  fake,
  Generator,
  oneOf,
  sequence,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { status, storeMode, unitType, associateMode } from '../constants';
import type { TBusinessUnit } from '../types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/business-units#company

const generator = Generator<TBusinessUnit>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf(...Object.values(status)),
    stores: [],
    storeMode: storeMode.Explicit,
    unitType: unitType.Company,
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    addresses: fake(() => [Address.random()]),
    shippingAddressIds: [],
    defaultShippingAddressId: null,
    billingAddressIds: [],
    defaultBillingAddressId: null,
    associateMode: associateMode.Explicit,
    associates: [],
    inheritedAssociates: [],
    parentUnit: null,
    topLevelUnit: KeyReference.random().typeId('business-unit'),
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
