import { TCartDraft } from '../../../types';
import sampleAustralia02 from './sample-australia-02';

describe('with the preset cart `sampleAustralia02`', () => {
  it('should return a cart discount draft', () => {
    const cartDraft = sampleAustralia02().build<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
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
        "businessUnit": undefined,
        "country": "AU",
        "currency": "AUD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "samplecustomer.austrailia@example.com",
        "customerGroup": {
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": [
          "emp15",
        ],
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "sample-australia-02-cart",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "996024",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Merchant",
        "shipping": undefined,
        "shippingAddress": {
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
        "shippingMethod": undefined,
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": undefined,
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it('should return a cart discount draft when build for GraphQL', () => {
    const cartDraft = sampleAustralia02().buildGraphql<TCartDraft>();

    expect(cartDraft).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
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
        "businessUnit": undefined,
        "country": "AU",
        "currency": "AUD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "samplecustomer.austrailia@example.com",
        "customerGroup": {
          "__typename": "Reference",
          "key": "employee",
          "typeId": "customer-group",
        },
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": [
          "emp15",
        ],
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "sample-australia-02-cart",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "996024",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Merchant",
        "shipping": undefined,
        "shippingAddress": {
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
        "shippingMethod": undefined,
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": undefined,
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});