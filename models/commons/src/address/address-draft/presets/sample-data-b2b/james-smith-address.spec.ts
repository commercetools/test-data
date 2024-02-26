import type { TAddressDraft } from '../../../types';
import jamesSmithAddress from './james-smith-address';

describe(`with jamesSmithAddress preset`, () => {
  it(`should return a jamesSmithAddress preset`, () => {
    const jamesSmithAddressPreset = jamesSmithAddress().build<TAddressDraft>();
    expect(jamesSmithAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "London",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "James",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "NW1 6XE",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Baker Street",
        "streetNumber": "221B",
        "title": undefined,
      }
    `);
  });

  it(`should return a jamesSmithAddress preset when built for graphql`, () => {
    const jamesSmithAddressPresetGraphql =
      jamesSmithAddress().buildGraphql<TAddressDraft>();
    expect(jamesSmithAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "London",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "James",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "NW1 6XE",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Baker Street",
        "streetNumber": "221B",
        "title": undefined,
      }
    `);
  });
});
