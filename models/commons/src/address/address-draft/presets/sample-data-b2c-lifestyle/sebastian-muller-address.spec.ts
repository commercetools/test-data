import type { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import sebastianMullerAddress from './sebastian-muller-address';

describe('with the presets for sebastianMullerAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = sebastianMullerAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "München",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Müller",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "80331",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Schulstrasse",
        "streetNumber": "12",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = sebastianMullerAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "München",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Müller",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "80331",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Schulstrasse",
        "streetNumber": "12",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = sebastianMullerAddress().build<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "München",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Müller",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "80331",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Schulstrasse",
        "streetNumber": "12",
        "title": undefined,
      }
    `);
  });
});
