import type { TCartDraft } from '../../../types';
import lifttechSolutionsLtdDeCart1 from './lifttech-solutions-ltd-de-cart-1';

describe(`with lifttechSolutionsLtdDeCart1 preset`, () => {
  it(`should return a lifttechSolutionsLtdDeCart1 preset`, () => {
    const lifttechSolutionsLtdDeCart1Preset =
      lifttechSolutionsLtdDeCart1().build<TCartDraft>();
    expect(lifttechSolutionsLtdDeCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Berlin",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Sophie",
          "id": undefined,
          "key": undefined,
          "lastName": "Müller",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "10115",
          "region": undefined,
          "salutation": undefined,
          "state": "Berlin",
          "streetName": "Schloßstraße",
          "streetNumber": "30",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sophie-mueller@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-de-cart-1",
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
            "sku": "hhh234-wx-red",
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
            "sku": "hhh234-wx-blue",
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
            "sku": "hhh234-wx-green",
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
          "city": "Berlin",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Sophie",
          "id": undefined,
          "key": undefined,
          "lastName": "Müller",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "10115",
          "region": undefined,
          "salutation": undefined,
          "state": "Berlin",
          "streetName": "Schloßstraße",
          "streetNumber": "30",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "de-fr-uk",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdDeCart1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdDeCart1PresetGraphql =
      lifttechSolutionsLtdDeCart1().buildGraphql<TCartDraft>();
    expect(lifttechSolutionsLtdDeCart1PresetGraphql).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Berlin",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Sophie",
          "id": undefined,
          "key": undefined,
          "lastName": "Müller",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "10115",
          "region": undefined,
          "salutation": undefined,
          "state": "Berlin",
          "streetName": "Schloßstraße",
          "streetNumber": "30",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sophie-mueller@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": undefined,
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-de-cart-1",
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
            "sku": "hhh234-wx-red",
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
            "sku": "hhh234-wx-blue",
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
            "sku": "hhh234-wx-green",
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
          "city": "Berlin",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Sophie",
          "id": undefined,
          "key": undefined,
          "lastName": "Müller",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "10115",
          "region": undefined,
          "salutation": undefined,
          "state": "Berlin",
          "streetName": "Schloßstraße",
          "streetNumber": "30",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "de-fr-uk",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});