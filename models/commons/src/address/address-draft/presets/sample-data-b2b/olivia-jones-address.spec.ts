import type { TAddressDraft } from '../../../types';
import oliviaJonesAddress from './olivia-jones-address';

describe(`with oliviaJonesAddress preset`, () => {
  it(`should return a oliviaJonesAddress preset`, () => {
    const oliviaJonesAddressPreset =
      oliviaJonesAddress().build<TAddressDraft>();
    expect(oliviaJonesAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Manchester",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Olivia",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "M1 1PT",
        "region": "Greater Manchester",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Market Street",
        "streetNumber": "18",
        "title": undefined,
      }
    `);
  });

  it(`should return a oliviaJonesAddress preset when built for graphql`, () => {
    const oliviaJonesAddressPresetGraphql =
      oliviaJonesAddress().buildGraphql<TAddressDraft>();
    expect(oliviaJonesAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Manchester",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Olivia",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "M1 1PT",
        "region": "Greater Manchester",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Market Street",
        "streetNumber": "18",
        "title": undefined,
      }
    `);
  });
});
