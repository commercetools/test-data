import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import sampleAustralia from './sample-australia';

describe('with the preset `sampleAustralia`', () => {
  it('should return a customer draft', () => {
    const customer = sampleAustralia().build<TCustomerDraft>();

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
            "country": "AU",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sample Customer",
            "id": undefined,
            "key": undefined,
            "lastName": "Australia",
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
        "email": "samplecustomer.austrailia@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "1234",
        "lastName": "Australia",
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
    const customer = sampleAustralia().buildGraphql<TCustomerDraftGraphql>();

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
            "country": "AU",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Sample Customer",
            "id": undefined,
            "key": undefined,
            "lastName": "Australia",
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
        "email": "samplecustomer.austrailia@example.com",
        "externalId": undefined,
        "firstName": "Sample Customer",
        "isEmailVerified": false,
        "key": "1234",
        "lastName": "Australia",
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
