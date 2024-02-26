import type { TAddressDraft } from '../../../types';
import williamTaylorAddress from './william-taylor-address';

describe(`with williamTaylorAddress preset`, () => {
  it(`should return a williamTaylorAddress preset`, () => {
    const williamTaylorAddressPreset =
      williamTaylorAddress().build<TAddressDraft>();
    expect(williamTaylorAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Liverpool",
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
        "lastName": "Taylor",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "L1 5AS",
        "region": "Merseyside",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Duke Street",
        "streetNumber": "32",
        "title": undefined,
      }
    `);
  });

  it(`should return a williamTaylorAddress preset when built for graphql`, () => {
    const williamTaylorAddressPresetGraphql =
      williamTaylorAddress().buildGraphql<TAddressDraft>();
    expect(williamTaylorAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Liverpool",
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
        "lastName": "Taylor",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "L1 5AS",
        "region": "Merseyside",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Duke Street",
        "streetNumber": "32",
        "title": undefined,
      }
    `);
  });
});
