import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import jenniferRobinsonAddress from './jennifer-robinson-address';

describe('with the presets for jenniferRobinsonAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = jenniferRobinsonAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "New York City",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Robinson",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "10001",
        "region": undefined,
        "salutation": undefined,
        "state": "New York",
        "streetName": "Second Street",
        "streetNumber": "15",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = jenniferRobinsonAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "New York City",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Robinson",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "10001",
        "region": undefined,
        "salutation": undefined,
        "state": "New York",
        "streetName": "Second Street",
        "streetNumber": "15",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = jenniferRobinsonAddress().build<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "New York City",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Robinson",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "10001",
        "region": undefined,
        "salutation": undefined,
        "state": "New York",
        "streetName": "Second Street",
        "streetNumber": "15",
        "title": undefined,
      }
    `);
  });
});
