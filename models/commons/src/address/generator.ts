import { fake, oneOf, Generator } from '@commercetools-test-data/core';
import type { TAddress } from './types';

const generator = Generator<TAddress>({
  fields: {
    id: fake((f) => f.random.alphaNumeric(8)),
    key: fake((f) => f.lorem.slug(2)),
    title: fake((f) => f.name.title()),
    salutation: oneOf(
      'Dear',
      'To Whom it May Concern',
      'Members of the Committee'
    ),
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    streetName: fake((f) => f.address.streetName()),
    streetNumber: fake((f) => String(f.datatype.number())),
    additionalStreetInfo: fake((f) => f.address.streetSuffix()),
    postalCode: fake((f) => f.address.zipCode()),
    city: fake((f) => f.address.city()),
    region: null,
    state: fake((f) => f.address.state()),
    // faker will treat country name and code fields separately and as a result the country name and code might not match.
    // Therefore, a static value for country name and code is used for now till a better solution is provided.
    countryName: 'Germany',
    country: 'DE',
    company: fake((f) => f.company.companyName()),
    department: fake((f) => f.commerce.department()),
    building: null,
    apartment: null,
    pOBox: 'PO Box 1033',
    phone: fake((f) => f.phone.phoneNumber()),
    mobile: fake((f) => f.phone.phoneNumber()),
    fax: fake((f) => f.phone.phoneNumber()),
    email: fake((f) => f.internet.email()),
    additionalAddressInfo: null,
    externalId: null,
  },
});

export default generator;
