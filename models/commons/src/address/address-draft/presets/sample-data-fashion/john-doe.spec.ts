import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import johnDoe from './john-doe';

describe('with the preset `johnDoe`', () => {
  it('should return a address draft', () => {
    const address = johnDoe().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Center Town",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "John",
        "id": undefined,
        "key": undefined,
        "lastName": "Doe",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "34567",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Road",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = johnDoe().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "__typename": "AddressDraft",
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Center Town",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "John",
        "id": undefined,
        "key": undefined,
        "lastName": "Doe",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "34567",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Road",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
