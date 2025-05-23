import type { TCartDraftGraphql, TCartDraftRest } from '../../../types';
import * as presets from './jennifer-schmidt-01';

describe(`with jenniferSchmidt01 preset`, () => {
  it(`should return a jenniferSchmidt01 preset when built for rest`, () => {
    const jenniferSchmidt01Preset = presets.restPreset().build();
    expect(jenniferSchmidt01Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jen@example.de",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "None",
        "itemShippingAddresses": undefined,
        "key": "jennifer-schmidt-01",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "GRCG-01",
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
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "MMST-01",
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
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "b2c-retail-store",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a jenniferSchmidt01 preset when built for graphql`, () => {
    const jenniferSchmidt01Preset = presets.graphqlPreset().build();
    expect(jenniferSchmidt01Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jen@example.de",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "None",
        "itemShippingAddresses": undefined,
        "key": "jennifer-schmidt-01",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": null,
            "productId": undefined,
            "quantity": 1,
            "recurrenceInfo": null,
            "shippingDetails": undefined,
            "sku": "GRCG-01",
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
            "key": undefined,
            "perMethodExternalTaxRate": null,
            "productId": undefined,
            "quantity": 1,
            "recurrenceInfo": null,
            "shippingDetails": undefined,
            "sku": "MMST-01",
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
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "b2c-retail-store",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a jenniferSchmidt01 preset when built for legacy rest`, () => {
    const jenniferSchmidt01Preset = presets
      .compatPreset()
      .buildRest<TCartDraftRest>();
    expect(jenniferSchmidt01Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jen@example.de",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "None",
        "itemShippingAddresses": undefined,
        "key": "jennifer-schmidt-01",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "GRCG-01",
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
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "MMST-01",
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
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "b2c-retail-store",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a jenniferSchmidt01 preset when built for legacy graphql`, () => {
    const jenniferSchmidt01Preset = presets
      .compatPreset()
      .buildGraphql<TCartDraftGraphql>();
    expect(jenniferSchmidt01Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": undefined,
          "apartment": undefined,
          "building": undefined,
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "businessUnit": undefined,
        "country": "DE",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "jen@example.de",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "None",
        "itemShippingAddresses": undefined,
        "key": "jennifer-schmidt-01",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": undefined,
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": null,
            "productId": undefined,
            "quantity": 1,
            "recurrenceInfo": null,
            "shippingDetails": undefined,
            "sku": "GRCG-01",
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
            "key": undefined,
            "perMethodExternalTaxRate": null,
            "productId": undefined,
            "quantity": 1,
            "recurrenceInfo": null,
            "shippingDetails": undefined,
            "sku": "MMST-01",
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
          "city": "Potsdam",
          "company": undefined,
          "country": "DE",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": "Jennifer",
          "id": undefined,
          "key": undefined,
          "lastName": "Schmidt",
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "14467",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Hauptstrasse",
          "streetNumber": "25",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "b2c-retail-store",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});
