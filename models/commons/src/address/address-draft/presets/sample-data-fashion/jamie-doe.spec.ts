import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import jamieDoe from './jamie-doe';

describe('with the preset `jamieDoe`', () => {
  it('should return a address draft', () => {
    const address = jamieDoe().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Mainville",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jamie",
        "id": undefined,
        "key": undefined,
        "lastName": "Doe",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "56789",
        "region": undefined,
        "salutation": undefined,
        "state": "New Jersey",
        "streetName": "Main Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = jamieDoe().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Mainville",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jamie",
        "id": undefined,
        "key": undefined,
        "lastName": "Doe",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "56789",
        "region": undefined,
        "salutation": undefined,
        "state": "New Jersey",
        "streetName": "Main Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
