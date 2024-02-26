import type { TAddressDraft } from '../../../types';
import camilleLefevreAddress from './camille-lefevre-address';

describe(`with camilleLefevreAddress preset`, () => {
  it(`should return a camilleLefevreAddress preset`, () => {
    const camilleLefevreAddressPreset =
      camilleLefevreAddress().build<TAddressDraft>();
    expect(camilleLefevreAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Nice",
        "company": undefined,
        "country": "FR",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Camille",
        "id": undefined,
        "key": undefined,
        "lastName": "Lefèvre",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "06000",
        "region": "Provence-Alpes-Côte d&#39;Azur",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Avenue Jean Médecin",
        "streetNumber": "22",
        "title": undefined,
      }
    `);
  });

  it(`should return a camilleLefevreAddress preset when built for graphql`, () => {
    const camilleLefevreAddressPresetGraphql =
      camilleLefevreAddress().buildGraphql<TAddressDraft>();
    expect(camilleLefevreAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Nice",
        "company": undefined,
        "country": "FR",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Camille",
        "id": undefined,
        "key": undefined,
        "lastName": "Lefèvre",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "06000",
        "region": "Provence-Alpes-Côte d&#39;Azur",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Avenue Jean Médecin",
        "streetNumber": "22",
        "title": undefined,
      }
    `);
  });
});
