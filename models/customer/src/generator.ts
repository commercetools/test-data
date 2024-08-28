import { Address, ClientLogging } from '@commercetools-test-data/commons';
import {
  Generator,
  fake,
  sequence,
  oneOf,
} from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { authenticationMode } from './constants';
import type { TCustomer } from './types';
const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/customers
const generator = Generator<TCustomer>({
  fields: {
    id: fake((f) => f.string.uuid()),
    customerNumber: fake((f) => f.lorem.slug(2)),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
    email: fake((f) => f.internet.email()),
    password: fake((f) => f.string.alphanumeric(23)),
    stores: null,
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    middleName: fake((f) => f.person.firstName()),
    title: fake((f) => f.person.jobTitle()),
    salutation: oneOf('Dr.', 'Ms.', 'Mr.'),
    dateOfBirth: null,
    companyName: fake((f) => f.company.name()),
    vatId: fake((f) => f.string.alphanumeric(12)),
    addresses: fake(() => [Address.random()]),
    defaultShippingAddressId: null,
    shippingAddressIds: null,
    defaultBillingAddressId: null,
    billingAddressIds: null,
    defaultShippingAddress: null,
    shippingAddresses: null,
    defaultBillingAddress: null,
    billingAddresses: null,
    isEmailVerified: fake((f) => f.datatype.boolean()),
    externalId: fake((f) => f.string.uuid()),
    customerGroup: null,
    custom: null,
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    authenticationMode: oneOf(...Object.values(authenticationMode)),
  },
});

export default generator;
