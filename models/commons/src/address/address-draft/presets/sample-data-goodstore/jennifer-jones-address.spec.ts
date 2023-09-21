import { TAddressDraft, TAddressDraftGraphql } from '../../../types';
// import samSmithAddresses from './sam-smith-addresses';
import jenniferJonesAddress from './jennifer-jones-address';

describe('with the presets for jenniferJonesAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = jenniferJonesAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Westminster",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "SW1A2AA",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Main Road",
        "streetNumber": "100",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = jenniferJonesAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Westminster",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "SW1A2AA",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Main Road",
        "streetNumber": "100",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = jenniferJonesAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Westminster",
        "company": undefined,
        "country": "GB",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Jones",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "SW1A2AA",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Main Road",
        "streetNumber": "100",
        "title": undefined,
      }
    `);
  });
});
