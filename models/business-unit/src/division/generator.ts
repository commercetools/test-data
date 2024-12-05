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
import { approvalRuleMode } from '../company/constants';
import { status, storeMode, unitType, associateMode } from './constants';
import type { TDivision } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/business-units#division

const generator = Generator<TDivision>({
  fields: {
    id: fake((f) => f.string.uuid()),
    version: sequence(),
    key: fake((f) => f.lorem.slug(2)),
    status: oneOf(...Object.values(status)),
    stores: [],
    storeMode: oneOf(...Object.values(storeMode)),
    unitType: unitType.Division,
    name: fake((f) => f.lorem.words(2)),
    contactEmail: fake((f) => f.internet.email()),
    addresses: fake(() => [Address.random()]),
    shippingAddressIds: [],
    defaultShippingAddressId: null,
    billingAddressIds: [],
    defaultBillingAddressId: null,
    associateMode: oneOf(...Object.values(associateMode)),
    associates: [],
    inheritedAssociates: [],
    parentUnit: fake(() => KeyReference.random().typeId('business-unit')),
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
