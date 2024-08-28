import type { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import sampleGermany from './sample-germany';

describe('with the preset `sampleGermany`', () => {
  it('should return a address draft', () => {
    const address = sampleGermany().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Sample Town",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "Germany",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "12345",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Sample Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = sampleGermany().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Sample Town",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "Germany",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "12345",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Sample Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
