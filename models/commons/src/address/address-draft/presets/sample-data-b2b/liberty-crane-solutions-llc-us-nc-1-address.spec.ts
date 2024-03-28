import type { TAddressDraft } from '../../../types';
import libertyCraneSolutionsLlcUsNc1Address from './liberty-crane-solutions-llc-us-nc-1-address';

describe(`with libertyCraneSolutionsLlcUsNc1Address preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsNc1Address preset`, () => {
    const libertyCraneSolutionsLlcUsNc1AddressPreset =
      libertyCraneSolutionsLlcUsNc1Address().build<TAddressDraft>();
    expect(libertyCraneSolutionsLlcUsNc1AddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": "Building B",
        "apartment": "456",
        "building": "C",
        "city": "Raleigh",
        "company": "Liberty Crane Solutions LLC NC",
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": undefined,
        "id": undefined,
        "key": "liberty-crane-solutions-llc-us-nc-1",
        "lastName": undefined,
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "27601",
        "region": "North Carolina",
        "salutation": undefined,
        "state": "North Carolina",
        "streetName": "Main Street",
        "streetNumber": "789",
        "title": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsNc1Address preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsNc1AddressPresetGraphql =
      libertyCraneSolutionsLlcUsNc1Address().buildGraphql<TAddressDraft>();
    expect(libertyCraneSolutionsLlcUsNc1AddressPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": "Building B",
        "apartment": "456",
        "building": "C",
        "city": "Raleigh",
        "company": "Liberty Crane Solutions LLC NC",
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": undefined,
        "id": undefined,
        "key": "liberty-crane-solutions-llc-us-nc-1",
        "lastName": undefined,
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "27601",
        "region": "North Carolina",
        "salutation": undefined,
        "state": "North Carolina",
        "streetName": "Main Street",
        "streetNumber": "789",
        "title": undefined,
      }
    `);
  });
});
