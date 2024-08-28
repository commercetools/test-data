import type { TAddressDraft, TAddressDraftGraphql } from '../../../types';
import jenniferSchmidtAddress from './jennifer-schmidt-address';

describe('with the presets for jenniferSchmidtAddress', () => {
  it('should return a address draft when built for default', () => {
    const address = jenniferSchmidtAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Potsdam",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Schmidt",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "14467",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Hauptstrasse",
        "streetNumber": "25",
        "title": undefined,
      }
    `);
  });
  it('should return a address draft when built for REST', () => {
    const address = jenniferSchmidtAddress().build<TAddressDraft>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Potsdam",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Schmidt",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "14467",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Hauptstrasse",
        "streetNumber": "25",
        "title": undefined,
      }
    `);
  });

  it('should return a address draft when built for GraphQL', () => {
    const address = jenniferSchmidtAddress().build<TAddressDraftGraphql>();

    expect(address).toMatchInlineSnapshot(`
      {
        "additionalAddressInfo": undefined,
        "additionalStreetInfo": undefined,
        "apartment": undefined,
        "building": undefined,
        "city": "Potsdam",
        "company": undefined,
        "country": "DE",
        "custom": undefined,
        "department": undefined,
        "email": undefined,
        "externalId": undefined,
        "fax": undefined,
        "firstName": "Jennifer",
        "id": undefined,
        "key": undefined,
        "lastName": "Schmidt",
        "mobile": undefined,
        "pOBox": undefined,
        "phone": undefined,
        "postalCode": "14467",
        "region": undefined,
        "salutation": undefined,
        "state": undefined,
        "streetName": "Hauptstrasse",
        "streetNumber": "25",
        "title": undefined,
      }
    `);
  });
});
