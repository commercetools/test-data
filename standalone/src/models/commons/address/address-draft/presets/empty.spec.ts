import type { TAddressDraft } from '../../types';
import empty from './empty';

it('should set all fields except country to undefined', () => {
  const emptyAddressDraft = empty().build<TAddressDraft>();
  expect(emptyAddressDraft).toEqual({
    id: undefined,
    key: undefined,
    title: undefined,
    salutation: undefined,
    firstName: undefined,
    lastName: undefined,
    streetName: undefined,
    streetNumber: undefined,
    additionalStreetInfo: undefined,
    postalCode: undefined,
    city: undefined,
    region: undefined,
    state: undefined,
    country: expect.any(String),
    company: undefined,
    department: undefined,
    building: undefined,
    apartment: undefined,
    pOBox: undefined,
    phone: undefined,
    mobile: undefined,
    fax: undefined,
    email: undefined,
    additionalAddressInfo: undefined,
    externalId: undefined,
    custom: undefined,
  });
});
