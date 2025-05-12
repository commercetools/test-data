import type { TAddressDraft } from '../../../types';
import michaelWilliamsAddress from './michael-williams-address';

describe(`with michaelWilliamsAddress preset`, () => {
  it(`should return a michaelWilliamsAddress preset`, () => {
    const michaelWilliamsAddressPreset =
      michaelWilliamsAddress().build<TAddressDraft>();
    expect(michaelWilliamsAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Edinburgh",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Michael",
        "id": undefined,
        "key": undefined,
        "lastName": "Williams",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "EH2 2LE",
        "region": "Scotland",
        "salutation": undefined,
        "state": undefined,
        "streetName": "George Street",
        "streetNumber": "42",
        "title": undefined,
      }
    `);
  });

  it(`should return a michaelWilliamsAddress preset when built for graphql`, () => {
    const michaelWilliamsAddressPresetGraphql =
      michaelWilliamsAddress().buildGraphql<TAddressDraft>();
    expect(michaelWilliamsAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Edinburgh",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Michael",
        "id": undefined,
        "key": undefined,
        "lastName": "Williams",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "EH2 2LE",
        "region": "Scotland",
        "salutation": undefined,
        "state": undefined,
        "streetName": "George Street",
        "streetNumber": "42",
        "title": undefined,
      }
    `);
  });
});
