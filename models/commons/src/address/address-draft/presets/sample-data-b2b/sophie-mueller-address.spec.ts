import type { TAddressDraft } from '../../../types';
import sophieMuellerAddress from './sophie-mueller-address';

describe(`with sophieMuellerAddress preset`, () => {
  it(`should return a sophieMuellerAddress preset`, () => {
    const sophieMuellerAddressPreset =
      sophieMuellerAddress().build<TAddressDraft>();
    expect(sophieMuellerAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Berlin",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sophie",
        "id": undefined,
        "key": undefined,
        "lastName": "Müller",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "10115",
        "region": undefined,
        "salutation": undefined,
        "state": "Berlin",
        "streetName": "Schloßstraße",
        "streetNumber": "30",
        "title": undefined,
      }
    `);
  });

  it(`should return a sophieMuellerAddress preset when built for graphql`, () => {
    const sophieMuellerAddressPresetGraphql =
      sophieMuellerAddress().buildGraphql<TAddressDraft>();
    expect(sophieMuellerAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Berlin",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sophie",
        "id": undefined,
        "key": undefined,
        "lastName": "Müller",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "10115",
        "region": undefined,
        "salutation": undefined,
        "state": "Berlin",
        "streetName": "Schloßstraße",
        "streetNumber": "30",
        "title": undefined,
      }
    `);
  });
});
