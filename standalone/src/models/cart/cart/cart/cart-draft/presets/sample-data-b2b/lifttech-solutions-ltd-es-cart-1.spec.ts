import type { TCartDraftGraphql, TCartDraftRest } from '../../../types';
import * as presets from './lifttech-solutions-ltd-es-cart-1';

describe(`with lifttechSolutionsLtdEsCart1 preset`, () => {
  it(`should return a lifttechSolutionsLtdEsCart1 preset when built for rest`, () => {
    const lifttechSolutionsLtdEsCart1Preset = presets.restPreset().build();
    expect(lifttechSolutionsLtdEsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "lifttech-solutions-ltd-es",
          "typeId": "business-unit",
        },
        "country": "ES",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sofia-lopez@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-es-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-red",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-blue",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-green",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": "Piso 2",
          "apartment": "567",
          "building": "F",
          "city": "Madrid",
          "company": "LiftTech Solutions Ltd ES",
          "country": "ES",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "lifttech-solutions-ltd-es",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "28013",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Calle Mayor",
          "streetNumber": "101",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "spain",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsCart1 preset when built for graphql`, () => {
    const lifttechSolutionsLtdEsCart1Preset = presets.graphqlPreset().build();
    expect(lifttechSolutionsLtdEsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "lifttech-solutions-ltd-es",
          "typeId": "business-unit",
        },
        "country": "ES",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sofia-lopez@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-es-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-red",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-blue",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-green",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": "Piso 2",
          "apartment": "567",
          "building": "F",
          "city": "Madrid",
          "company": "LiftTech Solutions Ltd ES",
          "country": "ES",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "lifttech-solutions-ltd-es",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "28013",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Calle Mayor",
          "streetNumber": "101",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "spain",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsCart1 preset when built for legacy rest`, () => {
    const lifttechSolutionsLtdEsCart1Preset = presets
      .compatPreset()
      .buildRest<TCartDraftRest>();
    expect(lifttechSolutionsLtdEsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "lifttech-solutions-ltd-es",
          "typeId": "business-unit",
        },
        "country": "ES",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sofia-lopez@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-es-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-red",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-blue",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
            "externalPrice": undefined,
            "externalTaxRate": undefined,
            "externalTotalPrice": undefined,
            "inventoryMode": undefined,
            "key": undefined,
            "perMethodExternalTaxRate": [],
            "productId": undefined,
            "quantity": 1,
            "shippingDetails": undefined,
            "sku": "jjj890-op-green",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": "Piso 2",
          "apartment": "567",
          "building": "F",
          "city": "Madrid",
          "company": "LiftTech Solutions Ltd ES",
          "country": "ES",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "lifttech-solutions-ltd-es",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "28013",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Calle Mayor",
          "streetNumber": "101",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "spain",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdEsCart1 preset when built for legacy graphql`, () => {
    const lifttechSolutionsLtdEsCart1Preset = presets
      .compatPreset()
      .buildGraphql<TCartDraftGraphql>();
    expect(lifttechSolutionsLtdEsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "lifttech-solutions-ltd-es",
          "typeId": "business-unit",
        },
        "country": "ES",
        "currency": "EUR",
        "custom": undefined,
        "customLineItems": undefined,
        "customShipping": undefined,
        "customerEmail": "sofia-lopez@ltsl.com",
        "customerGroup": undefined,
        "customerId": undefined,
        "deleteDaysAfterLastModification": undefined,
        "discountCodes": undefined,
        "externalTaxRateForShippingMethod": undefined,
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "lifttech-solutions-ltd-es-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-red",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-blue",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "spain",
              "typeId": "channel",
            },
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
            "sku": "jjj890-op-green",
            "supplyChannel": {
              "key": "eu-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
        ],
        "locale": undefined,
        "origin": "Customer",
        "shipping": undefined,
        "shippingAddress": {
          "additionalAddressInfo": undefined,
          "additionalStreetInfo": "Piso 2",
          "apartment": "567",
          "building": "F",
          "city": "Madrid",
          "company": "LiftTech Solutions Ltd ES",
          "country": "ES",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "lifttech-solutions-ltd-es",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "28013",
          "region": undefined,
          "salutation": undefined,
          "state": undefined,
          "streetName": "Calle Mayor",
          "streetNumber": "101",
          "title": undefined,
        },
        "shippingMethod": {
          "key": "standard-shipping-method",
          "typeId": "shipping-method",
        },
        "shippingMode": undefined,
        "shippingRateInput": undefined,
        "store": {
          "key": "spain",
          "typeId": "store",
        },
        "taxCalculationMode": undefined,
        "taxMode": undefined,
        "taxRoundingMode": undefined,
      }
    `);
  });
});
