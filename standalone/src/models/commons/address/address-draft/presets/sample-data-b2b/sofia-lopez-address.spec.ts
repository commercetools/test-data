import type { TAddressDraft } from '../../../types';
import sofiaLopezAddress from './sofia-lopez-address';

describe(`with sofiaLopezAddress preset`, () => {
  it(`should return a sofiaLopezAddress preset`, () => {
    const sofiaLopezAddressPreset = sofiaLopezAddress().build<TAddressDraft>();
    expect(sofiaLopezAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Barcelona",
        "company": undefined,
        "country": "ES",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sofía",
        "id": undefined,
        "key": undefined,
        "lastName": "López",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "08002",
        "region": "Catalunya",
        "salutation": undefined,
        "state": undefined,
        "streetName": "La Rambla",
        "streetNumber": "91",
        "title": undefined,
      }
    `);
  });

  it(`should return a sofiaLopezAddress preset when built for graphql`, () => {
    const sofiaLopezAddressPresetGraphql =
      sofiaLopezAddress().buildGraphql<TAddressDraft>();
    expect(sofiaLopezAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Barcelona",
        "company": undefined,
        "country": "ES",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sofía",
        "id": undefined,
        "key": undefined,
        "lastName": "López",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "08002",
        "region": "Catalunya",
        "salutation": undefined,
        "state": undefined,
        "streetName": "La Rambla",
        "streetNumber": "91",
        "title": undefined,
      }
    `);
  });
});
