import type { TCustomerDraft } from '../../../types';
import emmaJohnson from './emma-johnson';

describe(`with emmaJohnson preset`, () => {
  it(`should return a emmaJohnson preset`, () => {
    const emmaJohnsonPreset = emmaJohnson().build<TCustomerDraft>();
    expect(emmaJohnsonPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Birmingham",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Emma",
            "id": undefined,
            "key": undefined,
            "lastName": "Johnson",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "B4 7SL",
            "region": "West Midlands",
            "salutation": undefined,
            "state": undefined,
            "streetName": "High Street",
            "streetNumber": "15",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "Password",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "emma-johnson@ehlt.com",
        "externalId": undefined,
        "firstName": "Emma",
        "isEmailVerified": undefined,
        "key": "emma-johnson",
        "lastName": "Johnson",
        "locale": undefined,
        "middleName": undefined,
        "password": "123",
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });

  it(`should return a emmaJohnson preset when built for graphql`, () => {
    const emmaJohnsonPresetGraphql =
      emmaJohnson().buildGraphql<TCustomerDraft>();
    expect(emmaJohnsonPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Birmingham",
            "company": undefined,
            "country": "GB",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Emma",
            "id": undefined,
            "key": undefined,
            "lastName": "Johnson",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "B4 7SL",
            "region": "West Midlands",
            "salutation": undefined,
            "state": undefined,
            "streetName": "High Street",
            "streetNumber": "15",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "Password",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "emma-johnson@ehlt.com",
        "externalId": undefined,
        "firstName": "Emma",
        "isEmailVerified": undefined,
        "key": "emma-johnson",
        "lastName": "Johnson",
        "locale": undefined,
        "middleName": undefined,
        "password": "123",
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });
});