import type { TAddressDraft } from '../../../types';
import lucasDuboisAddress from './lucas-dubois-address';

describe(`with lucasDuboisAddress preset`, () => {
  it(`should return a lucasDuboisAddress preset`, () => {
    const lucasDuboisAddressPreset =
      lucasDuboisAddress().build<TAddressDraft>();
    expect(lucasDuboisAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Paris",
        "company": undefined,
        "country": "FR",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Lucas",
        "id": undefined,
        "key": undefined,
        "lastName": "Dubois",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "75001",
        "region": "Île-de-France",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Rue de Rivoli",
        "streetNumber": "117",
        "title": undefined,
      }
    `);
  });

  it(`should return a lucasDuboisAddress preset when built for graphql`, () => {
    const lucasDuboisAddressPresetGraphql =
      lucasDuboisAddress().buildGraphql<TAddressDraft>();
    expect(lucasDuboisAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Paris",
        "company": undefined,
        "country": "FR",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Lucas",
        "id": undefined,
        "key": undefined,
        "lastName": "Dubois",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "75001",
        "region": "Île-de-France",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Rue de Rivoli",
        "streetNumber": "117",
        "title": undefined,
      }
    `);
  });
});
