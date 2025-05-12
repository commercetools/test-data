import type { TAddressDraft } from '../../../types';
import oliviaNewtonAddress from './olivia-newton-address';

describe(`with oliviaNewtonAddress preset`, () => {
  it(`should return a oliviaNewtonAddress preset`, () => {
    const oliviaNewtonAddressPreset =
      oliviaNewtonAddress().build<TAddressDraft>();
    expect(oliviaNewtonAddressPreset).toMatchInlineSnapshot(`
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
        "lastName": "Newton",
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

  it(`should return a oliviaNewtonAddress preset when built for graphql`, () => {
    const oliviaNewtonAddressPresetGraphql =
      oliviaNewtonAddress().buildGraphql<TAddressDraft>();
    expect(oliviaNewtonAddressPresetGraphql).toMatchInlineSnapshot(`
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
        "lastName": "Newton",
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
