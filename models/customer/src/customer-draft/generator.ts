import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { TCustomerDraft } from '../types';

// https://docs.commercetools.com/api/projects/customers#customerdraft
//** Required values:  email, password

const generator = Generator<TCustomerDraft>({
  fields: {
    customerNumber: fake((f) => f.lorem.slug(2)),
    email: fake((f) => f.internet.email()),
    key: fake((f) => f.lorem.slug(2)),
    password: fake((f) => f.random.alphaNumeric(23)),
    stores: null,
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    middleName: fake((f) => f.name.firstName()),
    title: fake((f) => f.name.jobTitle()),
    salutation: oneOf('Dr.', 'Ms.', 'Mr.'),
    anonymousCart: null,
    anonymousId: null,
    externalId: fake((f) => f.datatype.uuid()),
    dateOfBirth: fake((f) => f.date.past(60)),
    companyName: fake((f) => f.company.name()),
    vatId: fake((f) => f.random.alphaNumeric(12)),
    isEmailVerified: fake((f) => f.datatype.boolean()),
    customerGroup: null,
    addresses: null,
    defaultBillingAddress: null,
    billingAddresses: null,
    defaultShippingAddress: null,
    shippingAddresses: null,
    custom: null,
    locale: fake((f) => f.random.locale()),
    // authenticationMode - currently in beta.
  },
});

export default generator;
