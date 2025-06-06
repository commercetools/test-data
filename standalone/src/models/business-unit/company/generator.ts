import { fake, Generator, oneOf, sequence } from '@/core';
import { Address, ClientLogging, KeyReference } from '@/models/commons';
import { createRelatedDates } from '@/utils';
import {
  status,
  storeMode,
  unitType,
  associateMode,
  approvalRuleMode,
} from './constants';
import type { TCompany } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/business-units#company

const generator = Generator<TCompany>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf(...Object.values(status)),
    stores: [],
    inheritedStores: [],
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
    topLevelUnit: fake(() => KeyReference.random().typeId('business-unit')),
    approvalRuleMode: approvalRuleMode.Explicit,
    custom: null,
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
  },
});

export default generator;
