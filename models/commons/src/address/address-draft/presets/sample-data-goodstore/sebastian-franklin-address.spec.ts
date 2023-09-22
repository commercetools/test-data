import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import sebastianFranklinAddress from './sebastian-franklin-address';

describe('with the presets for sebastianFranklinAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = sebastianFranklinAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Durham",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Franklin",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "27517",
        "region": undefined,
        "salutation": undefined,
        "state": "NC",
        "streetName": "South Road",
        "streetNumber": "9",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = sebastianFranklinAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Durham",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Franklin",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "27517",
        "region": undefined,
        "salutation": undefined,
        "state": "NC",
        "streetName": "South Road",
        "streetNumber": "9",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = sebastianFranklinAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Durham",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Franklin",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "27517",
        "region": undefined,
        "salutation": undefined,
        "state": "NC",
        "streetName": "South Road",
        "streetNumber": "9",
        "title": undefined,
      }
    `);
  });
});
