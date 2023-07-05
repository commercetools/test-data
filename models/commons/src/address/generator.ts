import { fake, oneOf, Generator } from '@commercetools-test-data/core';
import type { TAddress } from './types';

const generator = Generator<TAddress>({
  fields: {
    id: fake((f) => f.string.alphaNumeric(8)),
    key: fake((f) => f.lorem.slug(2)),
    title: fake((f) => f.name.jobTitle()),
    salutation: oneOf(
      'Dear',
      'To Whom it May Concern',
      'Members of the Committee'
    ),
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    streetName: fake((f) => f.address.street()),
    streetNumber: fake((f) => String(f.number.int()())),
    additionalStreetInfo: fake((f) => f.address.street()),
    postalCode: fake((f) => f.address.zipCode()),
    city: fake((f) => f.address.city()),
    region: null,
    state: fake((f) => f.address.state()),
    country: 'DE',
    company: fake((f) => f.company.name()),
    department: fake((f) => f.commerce.department()),
    building: null,
    apartment: null,
    pOBox: 'PO Box 1033',
    phone: fake((f) => f.phone.number()),
    mobile: fake((f) => f.phone.number()),
    fax: fake((f) => f.phone.number()),
    email: fake((f) => f.internet.email()),
    additionalAddressInfo: null,
    externalId: null,
    custom: null,
  },
});

export default generator;
