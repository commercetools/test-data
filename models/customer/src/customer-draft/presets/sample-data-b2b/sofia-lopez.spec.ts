import type { TCustomerDraft } from '../../../types';
import sofiaLopez from './sofia-lopez';

describe(`with sofiaLopez preset`, () => {
  it(`should return a sofiaLopez preset`, () => {
    const sofiaLopezPreset = sofiaLopez().build<TCustomerDraft>();
    expect(sofiaLopezPreset).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Barcelona",
            "company": undefined,
            "country": "ES",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sofía",
            "id": undefined,
            "key": undefined,
            "lastName": "López",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "08002",
            "region": "Catalunya",
            "salutation": undefined,
            "state": undefined,
            "streetName": "La Rambla",
            "streetNumber": "91",
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
        "email": "sofia-lopez@ltsl.com",
        "externalId": undefined,
        "firstName": "Sofía",
        "isEmailVerified": undefined,
        "key": "sofia-lopez",
        "lastName": "López",
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

  it(`should return a sofiaLopez preset when built for graphql`, () => {
    const sofiaLopezPresetGraphql = sofiaLopez().buildGraphql<TCustomerDraft>();
    expect(sofiaLopezPresetGraphql).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Barcelona",
            "company": undefined,
            "country": "ES",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sofía",
            "id": undefined,
            "key": undefined,
            "lastName": "López",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "08002",
            "region": "Catalunya",
            "salutation": undefined,
            "state": undefined,
            "streetName": "La Rambla",
            "streetNumber": "91",
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
        "email": "sofia-lopez@ltsl.com",
        "externalId": undefined,
        "firstName": "Sofía",
        "isEmailVerified": undefined,
        "key": "sofia-lopez",
        "lastName": "López",
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