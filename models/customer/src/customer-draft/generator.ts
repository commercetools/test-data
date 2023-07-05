import { AddressDraft } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
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
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    middleName: fake((f) => f.name.firstName()),
    title: fake((f) => f.name.jobTitle()),
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
    // authenticationMode - currently in beta.
  },
});

export default generator;
