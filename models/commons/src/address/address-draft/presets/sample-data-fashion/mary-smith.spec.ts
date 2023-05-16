import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import marySmith from './mary-smith';

describe('with the preset `marySmith`', () => {
  it('should return a address draft', () => {
    const address = marySmith().build<TAddressDraft>();

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
        "firstName": "Mary",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
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
    const address = marySmith().buildGraphql<TAddressDraftGraphql>();

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
        "firstName": "Mary",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
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
