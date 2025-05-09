import type { TAddressDraft } from '../../../types';
import ameliaJonesAddress from './amelia-jones-address';

describe(`with ameliaJonesAddress preset`, () => {
  it(`should return a ameliaJonesAddress preset`, () => {
    const ameliaJonesAddressPreset =
      ameliaJonesAddress().build<TAddressDraft>();
    expect(ameliaJonesAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Birmingham",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Amelia",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "B3 4BH",
        "region": "West Midlands",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Churchill Way",
        "streetNumber": "59",
        "title": undefined,
      }
    `);
  });

  it(`should return a ameliaJonesAddress preset when built for graphql`, () => {
    const ameliaJonesAddressPresetGraphql =
      ameliaJonesAddress().buildGraphql<TAddressDraft>();
    expect(ameliaJonesAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Birmingham",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Amelia",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "B3 4BH",
        "region": "West Midlands",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Churchill Way",
        "streetNumber": "59",
        "title": undefined,
      }
    `);
  });
});
