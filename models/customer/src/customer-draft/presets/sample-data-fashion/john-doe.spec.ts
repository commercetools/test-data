import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import johnDoe from './john-doe';

describe('with the preset `johnDoe`', () => {
  it('should return a customer draft with name `John Doe`', () => {
    const customer = johnDoe().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Center Town",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "John",
            "id": undefined,
            "key": undefined,
            "lastName": "Doe",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "34567",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Center Road",
            "streetNumber": "1",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": {
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "john.doe@example.com",
        "externalId": undefined,
        "firstName": "John",
        "isEmailVerified": false,
        "key": "1234",
        "lastName": "Doe",
        "locale": undefined,
        "middleName": undefined,
        "password": undefined,
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });

  it('should return a customer draft with name `John Doe` when built for GraphQL', () => {
    const customer = johnDoe().buildGraphql<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
          {
            "additionalAddressInfo": undefined,
            "additionalStreetInfo": undefined,
            "apartment": undefined,
            "building": undefined,
            "city": "Center Town",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "John",
            "id": undefined,
            "key": undefined,
            "lastName": "Doe",
            "mobile": undefined,
            "pOBox": undefined,
            "phone": undefined,
            "postalCode": "34567",
            "region": undefined,
            "salutation": undefined,
            "state": undefined,
            "streetName": "Center Road",
            "streetNumber": "1",
            "title": undefined,
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": {
          "__typename": "Reference",
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "john.doe@example.com",
        "externalId": undefined,
        "firstName": "John",
        "isEmailVerified": false,
        "key": "1234",
        "lastName": "Doe",
        "locale": undefined,
        "middleName": undefined,
        "password": undefined,
        "salutation": undefined,
        "shippingAddresses": undefined,
        "stores": undefined,
        "title": undefined,
        "vatId": undefined,
      }
    `);
  });
});
