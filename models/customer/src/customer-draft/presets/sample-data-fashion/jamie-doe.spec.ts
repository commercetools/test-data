import { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import jamieDoe from './jamie-doe';

describe('with the preset `jamieDoe`', () => {
  it('should return a customer draft with name `Jamie Doe`', () => {
    const customer = jamieDoe().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
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
            "firstName": "Jamie",
            "id": undefined,
            "key": undefined,
            "lastName": "Doe",
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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": {
          "key": "vip",
          "typeId": "customer-group",
        },
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "jamie.doe@example.com",
        "externalId": undefined,
        "firstName": "Jamie",
        "isEmailVerified": false,
        "key": "12345",
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

  it('should return a customer draft with name `Jamie Doe` when built for GraphQL', () => {
    const customer = jamieDoe().buildGraphql<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "__typename": "CustomerDraft",
        "addresses": [
          {
            "__typename": "AddressDraft",
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
            "firstName": "Jamie",
            "id": undefined,
            "key": undefined,
            "lastName": "Doe",
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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": {
          "__typename": "Reference",
          "key": "vip",
          "typeId": "customer-group",
        },
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "jamie.doe@example.com",
        "externalId": undefined,
        "firstName": "Jamie",
        "isEmailVerified": false,
        "key": "12345",
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
