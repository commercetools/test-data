import type { TAddressDraft } from '../../../types';
import lukasSchmidtAddress from './lukas-schmidt-address';

describe(`with lukasSchmidtAddress preset`, () => {
  it(`should return a lukasSchmidtAddress preset`, () => {
    const lukasSchmidtAddressPreset =
      lukasSchmidtAddress().build<TAddressDraft>();
    expect(lukasSchmidtAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Stuttgart",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Lukas",
        "id": undefined,
        "key": undefined,
        "lastName": "Schmidt",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "70173",
        "region": undefined,
        "salutation": undefined,
        "state": "Baden-Württemberg",
        "streetName": "Königstraße",
        "streetNumber": "50",
        "title": undefined,
      }
    `);
  });

  it(`should return a lukasSchmidtAddress preset when built for graphql`, () => {
    const lukasSchmidtAddressPresetGraphql =
      lukasSchmidtAddress().buildGraphql<TAddressDraft>();
    expect(lukasSchmidtAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Stuttgart",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Lukas",
        "id": undefined,
        "key": undefined,
        "lastName": "Schmidt",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "70173",
        "region": undefined,
        "salutation": undefined,
        "state": "Baden-Württemberg",
        "streetName": "Königstraße",
        "streetNumber": "50",
        "title": undefined,
      }
    `);
  });
});
