import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import sampleUsa from './sample-usa';

describe('with the preset `sampleUsa`', () => {
  it('should return a address draft', () => {
    const address = sampleUsa().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Mainville",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "USA",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "56789",
        "region": undefined,
        "salutation": undefined,
        "state": "New Jersey",
        "streetName": "Main Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = sampleUsa().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Mainville",
        "company": undefined,
        "country": "US",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sample Customer",
        "id": undefined,
        "key": undefined,
        "lastName": "USA",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "56789",
        "region": undefined,
        "salutation": undefined,
        "state": "New Jersey",
        "streetName": "Main Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
