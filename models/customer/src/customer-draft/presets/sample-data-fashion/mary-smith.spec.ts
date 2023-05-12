import type { TCustomerDraft, TCustomerDraftGraphql } from '../../../types';
import marySmith from './mary-smith';

describe('with the preset `marySmith`', () => {
  it('should return a customer draft with name `Mary`', () => {
    const customer = marySmith().build<TCustomerDraft>();

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
            "firstName": "Mary",
            "id": undefined,
            "key": undefined,
            "lastName": "Smith",
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
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "mary.smith@example.com",
        "externalId": undefined,
        "firstName": "Mary",
        "isEmailVerified": false,
        "key": "123456",
        "lastName": "Smith",
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

  it('should return a customer draft with name `Mary` when built for GraphQL', () => {
    const customer = marySmith().buildGraphql<TCustomerDraftGraphql>();

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
            "city": "Sample Town",
            "company": undefined,
            "country": "DE",
            "custom": undefined,
            "department": undefined,
            "email": undefined,
            "externalId": undefined,
            "fax": undefined,
            "firstName": "Mary",
            "id": undefined,
            "key": undefined,
            "lastName": "Smith",
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
        "billingAddresses": undefined,
        "companyName": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "customerNumber": undefined,
        "dateOfBirth": undefined,
        "defaultBillingAddress": undefined,
        "defaultShippingAddress": undefined,
        "email": "mary.smith@example.com",
        "externalId": undefined,
        "firstName": "Mary",
        "isEmailVerified": false,
        "key": "123456",
        "lastName": "Smith",
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
