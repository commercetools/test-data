import type { TCartDraft } from '../../../types';
import libertyCraneSolutionsLlcUsCart2 from './liberty-crane-solutions-llc-us-cart-2';

describe(`with libertyCraneSolutionsLlcUsCart2 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsCart2 preset`, () => {
    const libertyCraneSolutionsLlcUsCart2Preset =
      libertyCraneSolutionsLlcUsCart2().build<TCartDraft>();
    expect(libertyCraneSolutionsLlcUsCart2Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Cardiff",
          "company": undefined,
          "country": "GB",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Ava",
          "id": undefined,
          "key": undefined,
          "lastName": "Brown",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "CF10 2DL",
          "region": "Wales",
          "salutation": undefined,
          "state": undefined,
          "streetName": "Queen Street",
          "streetNumber": "72",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "US",
        "currency": "USD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "ava-brown@lcs.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-2",
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
            "sku": "zz456-st-red",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
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
            "sku": "zz456-st-blue",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
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
            "sku": "zz456-st-green",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Cardiff",
          "company": undefined,
          "country": "GB",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Ava",
          "id": undefined,
          "key": undefined,
          "lastName": "Brown",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "CF10 2DL",
          "region": "Wales",
          "salutation": undefined,
          "state": undefined,
          "streetName": "Queen Street",
          "streetNumber": "72",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "us-medium-customers",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a libertyCraneSolutionsLlcUsCart2 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsCart2PresetGraphql =
      libertyCraneSolutionsLlcUsCart2().buildGraphql<TCartDraft>();
    expect(libertyCraneSolutionsLlcUsCart2PresetGraphql).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Cardiff",
          "company": undefined,
          "country": "GB",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Ava",
          "id": undefined,
          "key": undefined,
          "lastName": "Brown",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "CF10 2DL",
          "region": "Wales",
          "salutation": undefined,
          "state": undefined,
          "streetName": "Queen Street",
          "streetNumber": "72",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "US",
        "currency": "USD",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "ava-brown@lcs.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-2",
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
            "sku": "zz456-st-red",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
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
            "sku": "zz456-st-blue",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
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
            "sku": "zz456-st-green",
            "supplyChannel": undefined,
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Cardiff",
          "company": undefined,
          "country": "GB",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Ava",
          "id": undefined,
          "key": undefined,
          "lastName": "Brown",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "CF10 2DL",
          "region": "Wales",
          "salutation": undefined,
          "state": undefined,
          "streetName": "Queen Street",
          "streetNumber": "72",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "us-medium-customers",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});