import { AddressDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { authenticationMode } from '../constants';
import { TCustomerDraft } from '../types';

// https://docs.commercetools.com/api/projects/customers#customerdraft
//** Required values:  email, password

const generator = Generator<TCustomerDraft>({
  fields: {
    customerNumber: fake((f) => f.lorem.slug(2)),
    email: fake((f) => f.internet.email()),
    key: fake((f) => f.lorem.slug(2)),
    password: fake((f) => f.string.alphanumeric(23)),
    stores: null,
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    middleName: fake((f) => f.person.firstName()),
    title: fake((f) => f.person.jobTitle()),
    salutation: oneOf('Dr.', 'Ms.', 'Mr.'),
    anonymousCart: null,
    anonymousId: null,
    externalId: fake((f) => f.string.uuid()),
    dateOfBirth: null,
    companyName: fake((f) => f.company.name()),
    vatId: fake((f) => f.string.alphanumeric(12)),
    isEmailVerified: fake((f) => f.datatype.boolean()),
    customerGroup: null,
    addresses: fake(() => [AddressDraft.random()]),
    defaultBillingAddress: null,
    billingAddresses: null,
    defaultShippingAddress: null,
    shippingAddresses: null,
    custom: null,
    locale: oneOf('en-US', 'de-DE', 'es-ES'),
    authenticationMode: oneOf(...Object.values(authenticationMode)),
  },
});

export default generator;
