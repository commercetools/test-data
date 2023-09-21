import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
// import samSmithAddresses from './sam-smith-addresses';
import sebastianSmithAddress from './sebastian-smith-address';

describe('with the presets for sebastianSmithAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = sebastianSmithAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Fareham",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "PO167GZ",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = sebastianSmithAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Fareham",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "PO167GZ",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address =
      sebastianSmithAddress().buildGraphql<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Fareham",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Sebastian",
        "id": undefined,
        "key": undefined,
        "lastName": "Smith",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "PO167GZ",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Center Street",
        "streetNumber": "1",
        "title": undefined,
      }
    `);
  });
});
