import type { TAddressDraft } from '../../../types';
import emmaJohnsonAddress from './emma-johnson-address';

describe(`with emmaJohnsonAddress preset`, () => {
  it(`should return a emmaJohnsonAddress preset`, () => {
    const emmaJohnsonAddressPreset =
      emmaJohnsonAddress().build<TAddressDraft>();
    expect(emmaJohnsonAddressPreset).toMatchInlineSnapshot(`
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
        "firstName": "Emma",
        "id": undefined,
        "key": undefined,
        "lastName": "Johnson",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "B4 7SL",
        "region": "West Midlands",
        "salutation": undefined,
        "state": undefined,
        "streetName": "High Street",
        "streetNumber": "15",
        "title": undefined,
      }
    `);
  });

  it(`should return a emmaJohnsonAddress preset when built for graphql`, () => {
    const emmaJohnsonAddressPresetGraphql =
      emmaJohnsonAddress().buildGraphql<TAddressDraft>();
    expect(emmaJohnsonAddressPresetGraphql).toMatchInlineSnapshot(`
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
        "firstName": "Emma",
        "id": undefined,
        "key": undefined,
        "lastName": "Johnson",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "B4 7SL",
        "region": "West Midlands",
        "salutation": undefined,
        "state": undefined,
        "streetName": "High Street",
        "streetNumber": "15",
        "title": undefined,
      }
    `);
  });
});
