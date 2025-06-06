import { fake, oneOf, Generator } from '@/core';
import { TAddressDraft } from '../types';

// https://docs.commercetools.com/api/types#addressdraft
const generator = Generator<TAddressDraft>({
  fields: {
    id: null,
    key: fake((f) => f.lorem.slug(2)),
    title: fake((f) => f.person.jobTitle()),
    salutation: oneOf(
      'Dear',
      'To Whom it May Concern',
      'Members of the Committee'
    ),
    firstName: fake((f) => f.person.firstName()),
    lastName: fake((f) => f.person.lastName()),
    streetName: fake((f) => f.location.street()),
    streetNumber: fake((f) => String(f.number.int())),
    additionalStreetInfo: fake((f) => f.location.street()),
    postalCode: fake((f) => f.location.zipCode()),
    city: fake((f) => f.location.city()),
    region: null,
    state: fake((f) => f.location.state()),
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
