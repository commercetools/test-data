import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import sampleGermany from './sample-germany';

describe('with the preset `sampleGermany`', () => {
  it('should return a customer draft', () => {
    const customer = sampleGermany().build<TCustomerDraft>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
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
            "firstName": "Sample Customer",
            "id": undefined,
            "key": undefined,
            "lastName": "Germany",
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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "samplecustomer.germany@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "123456",
        "lastName": "Germany",
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
    const customer = sampleGermany().buildGraphql<TCustomerDraftGraphql>();

    expect(customer).toMatchInlineSnapshot(`
      {
        "addresses": [
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
            "firstName": "Sample Customer",
            "id": undefined,
            "key": undefined,
            "lastName": "Germany",
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
          },
        ],
        "anonymousCart": undefined,
        "anonymousId": undefined,
        "authenticationMode": "ExternalAuth",
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "samplecustomer.germany@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "123456",
        "lastName": "Germany",
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
