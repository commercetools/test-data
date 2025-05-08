import type { TAddressDraft } from '../../../types';
import williamDavisAddress from './william-davis-address';

describe(`with williamDavisAddress preset`, () => {
  it(`should return a williamDavisAddress preset`, () => {
    const williamDavisAddressPreset =
      williamDavisAddress().build<TAddressDraft>();
    expect(williamDavisAddressPreset).toMatchInlineSnapshot(`
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
        "firstName": "William",
        "id": undefined,
        "key": undefined,
        "lastName": "Davis",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "W6 9JT",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "King Street",
        "streetNumber": "85",
        "title": undefined,
      }
    `);
  });

  it(`should return a williamDavisAddress preset when built for graphql`, () => {
    const williamDavisAddressPresetGraphql =
      williamDavisAddress().buildGraphql<TAddressDraft>();
    expect(williamDavisAddressPresetGraphql).toMatchInlineSnapshot(`
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
        "firstName": "William",
        "id": undefined,
        "key": undefined,
        "lastName": "Davis",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "W6 9JT",
        "region": "Greater London",
        "salutation": undefined,
        "state": undefined,
        "streetName": "King Street",
        "streetNumber": "85",
        "title": undefined,
      }
    `);
  });
});
