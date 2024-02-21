import type { TAddressDraft } from '../../../types';
import avaBrownAddress from './ava-brown-address';

describe(`with avaBrownAddress preset`, () => {
  it(`should return a avaBrownAddress preset`, () => {
    const avaBrownAddressPreset = avaBrownAddress().build<TAddressDraft>();
    expect(avaBrownAddressPreset).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Cardiff",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Ava",
        "id": undefined,
        "key": undefined,
        "lastName": "Brown",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "CF10 2DL",
        "region": "Wales",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Queen Street",
        "streetNumber": "72",
        "title": undefined,
      }
    `);
  });

  it(`should return a avaBrownAddress preset when built for graphql`, () => {
    const avaBrownAddressPresetGraphql =
      avaBrownAddress().buildGraphql<TAddressDraft>();
    expect(avaBrownAddressPresetGraphql).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Cardiff",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Ava",
        "id": undefined,
        "key": undefined,
        "lastName": "Brown",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "CF10 2DL",
        "region": "Wales",
        "salutation": undefined,
        "state": undefined,
        "streetName": "Queen Street",
        "streetNumber": "72",
        "title": undefined,
      }
    `);
  });
});
