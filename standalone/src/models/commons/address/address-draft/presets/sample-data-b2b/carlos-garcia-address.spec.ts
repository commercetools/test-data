import type { TAddressDraft } from '../../../types';
import carlosGarciaAddress from './carlos-garcia-address';

describe(`with carlosGarciaAddress preset`, () => {
  it(`should return a carlosGarciaAddress preset`, () => {
    const carlosGarciaAddressPreset =
      carlosGarciaAddress().build<TAddressDraft>();
    expect(carlosGarciaAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Madrid",
        "company": undefined,
        "country": "ES",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Carlos",
        "id": undefined,
        "key": undefined,
        "lastName": "García",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "28013",
        "region": "Comunidad de Madrid",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Gran Vía",
        "streetNumber": "28",
        "title": undefined,
      }
    `);
  });

  it(`should return a carlosGarciaAddress preset when built for graphql`, () => {
    const carlosGarciaAddressPresetGraphql =
      carlosGarciaAddress().buildGraphql<TAddressDraft>();
    expect(carlosGarciaAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Madrid",
        "company": undefined,
        "country": "ES",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Carlos",
        "id": undefined,
        "key": undefined,
        "lastName": "García",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "28013",
        "region": "Comunidad de Madrid",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Gran Vía",
        "streetNumber": "28",
        "title": undefined,
      }
    `);
  });
});
