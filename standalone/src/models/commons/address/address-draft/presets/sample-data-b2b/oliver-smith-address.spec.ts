import type { TAddressDraft } from '../../../types';
import oliverSmithAddress from './oliver-smith-address';

describe(`with oliverSmithAddress preset`, () => {
  it(`should return a oliverSmithAddress preset`, () => {
    const oliverSmithAddressPreset =
      oliverSmithAddress().build<TAddressDraft>();
    expect(oliverSmithAddressPreset).toMatchInlineSnapshot(`
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
        "firstName": "Oliver",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "SW1E 5JL",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Victoria Street",
        "streetNumber": "100",
        "title": undefined,
      }
    `);
  });

  it(`should return a oliverSmithAddress preset when built for graphql`, () => {
    const oliverSmithAddressPresetGraphql =
      oliverSmithAddress().buildGraphql<TAddressDraft>();
    expect(oliverSmithAddressPresetGraphql).toMatchInlineSnapshot(`
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
        "firstName": "Oliver",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "SW1E 5JL",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Victoria Street",
        "streetNumber": "100",
        "title": undefined,
      }
    `);
  });
});
