import {
  Generator,
  fake,
  sequence,
  oneOf,
} from '@commercetools-test-data/core';
import { Address, ClientLogging } from '@commercetools-test-data/commons';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { TCustomer } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

// https://docs.commercetools.com/api/projects/customers
const generator = Generator<TCustomer>({
  fields: {
    id: fake((f) => f.datatype.uuid()),
    customerNumber: fake((f) => f.lorem.slug(2)),
    key: fake((f) => f.lorem.slug(2)),
    version: sequence(),
    createdAt: fake(getOlderDate),
    createdBy: fake(() => ClientLogging.random()),
    lastModifiedAt: fake(getNewerDate),
    lastModifiedBy: fake(() => ClientLogging.random()),
    email: fake((f) => f.internet.email()),
    password: fake((f) => f.random.alphaNumeric(23)),
    stores: null,
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    middleName: fake((f) => f.name.firstName()),
    title: fake((f) => f.name.jobTitle()),
    salutation: oneOf('Dr.', 'Ms.', 'Mr.'),
    dateOfBirth: fake((f) => f.date.past(60)),
    companyName: fake((f) => f.company.name()),
    vatId: fake((f) => f.random.alphaNumeric(12)),
    addresses: fake(() => Address.random()),
    defaultShippingAddressId: null,
    shippingAddressIds: null,
    defaultBillingAddressId: null,
    billingAddressIds: null,
    isEmailVerified: fake((f) => f.datatype.boolean()),
    externalId: fake((f) => f.datatype.uuid()),
    customerGroup: null,
    custom: null,
    locale: fake((f) => f.random.locale()),
    authenticationMode: 'password',
  },
});

export default generator;
