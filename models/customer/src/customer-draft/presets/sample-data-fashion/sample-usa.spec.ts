import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import sampleUsa from './sample-usa';

describe('with the preset `sampleUsa`', () => {
  it('should return a customer draft', () => {
    const customer = sampleUsa().build<TCustomerDraft>();

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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
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
        "email": "samplecustomer.usa@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "12345",
        "lastName": "USA",
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

  it('should return a customer draft when built for GraphQL', () => {
    const customer = sampleUsa().buildGraphql<TCustomerDraftGraphql>();

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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
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
        "email": "samplecustomer.usa@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "12345",
        "lastName": "USA",
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
