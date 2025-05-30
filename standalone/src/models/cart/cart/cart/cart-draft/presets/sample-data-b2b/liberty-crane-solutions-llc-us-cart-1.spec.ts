import type { TCartDraftGraphql, TCartDraftRest } from '../../../types';
import * as presets from './liberty-crane-solutions-llc-us-cart-1';

describe(`with libertyCraneSolutionsLlcUsCart1 preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsCart1 preset when built for rest`, () => {
    const libertyCraneSolutionsLlcUsCart1Preset = presets.restPreset().build();
    expect(libertyCraneSolutionsLlcUsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "liberty-crane-solutions-llc-us",
          "typeId": "business-unit",
        },
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
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-red",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-blue",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-green",
            "supplyChannel": {
              "key": "us-warehouse",
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
          "additionalStreetInfo": "Building B",
          "apartment": "456",
          "building": "C",
          "city": "Raleigh",
          "company": "Liberty Crane Solutions LLC NC",
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "liberty-crane-solutions-llc-us-nc-1",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "27601",
          "region": "North Carolina",
          "salutation": undefined,
          "state": "North Carolina",
          "streetName": "Main Street",
          "streetNumber": "789",
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

  it(`should return a libertyCraneSolutionsLlcUsCart1 preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsCart1Preset = presets
      .graphqlPreset()
      .build();
    expect(libertyCraneSolutionsLlcUsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "liberty-crane-solutions-llc-us",
          "typeId": "business-unit",
        },
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
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-red",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-blue",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-green",
            "supplyChannel": {
              "key": "us-warehouse",
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
          "additionalStreetInfo": "Building B",
          "apartment": "456",
          "building": "C",
          "city": "Raleigh",
          "company": "Liberty Crane Solutions LLC NC",
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "liberty-crane-solutions-llc-us-nc-1",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "27601",
          "region": "North Carolina",
          "salutation": undefined,
          "state": "North Carolina",
          "streetName": "Main Street",
          "streetNumber": "789",
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

  it(`should return a libertyCraneSolutionsLlcUsCart1 preset when built for legacy rest`, () => {
    const libertyCraneSolutionsLlcUsCart1Preset = presets
      .compatPreset()
      .buildRest<TCartDraftRest>();
    expect(libertyCraneSolutionsLlcUsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "liberty-crane-solutions-llc-us",
          "typeId": "business-unit",
        },
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
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-red",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-blue",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-green",
            "supplyChannel": {
              "key": "us-warehouse",
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
          "additionalStreetInfo": "Building B",
          "apartment": "456",
          "building": "C",
          "city": "Raleigh",
          "company": "Liberty Crane Solutions LLC NC",
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "liberty-crane-solutions-llc-us-nc-1",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "27601",
          "region": "North Carolina",
          "salutation": undefined,
          "state": "North Carolina",
          "streetName": "Main Street",
          "streetNumber": "789",
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

  it(`should return a libertyCraneSolutionsLlcUsCart1 preset when built for legacy graphql`, () => {
    const libertyCraneSolutionsLlcUsCart1Preset = presets
      .compatPreset()
      .buildGraphql<TCartDraftGraphql>();
    expect(libertyCraneSolutionsLlcUsCart1Preset).toMatchInlineSnapshot(`
      {
        "anonymousId": undefined,
        "billingAddress": undefined,
        "businessUnit": {
          "key": "liberty-crane-solutions-llc-us",
          "typeId": "business-unit",
        },
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
        "inventoryMode": "TrackOnly",
        "itemShippingAddresses": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-1",
        "lineItems": [
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-red",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-blue",
            "supplyChannel": {
              "key": "us-warehouse",
              "typeId": "channel",
            },
            "variantId": undefined,
          },
          {
            "addedAt": undefined,
            "custom": undefined,
            "distributionChannel": {
              "key": "us-medium-customers",
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
            "sku": "fff456-st-green",
            "supplyChannel": {
              "key": "us-warehouse",
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
          "additionalStreetInfo": "Building B",
          "apartment": "456",
          "building": "C",
          "city": "Raleigh",
          "company": "Liberty Crane Solutions LLC NC",
          "country": "US",
          "custom": undefined,
          "department": undefined,
          "email": undefined,
          "externalId": undefined,
          "fax": undefined,
          "firstName": undefined,
          "id": undefined,
          "key": "liberty-crane-solutions-llc-us-nc-1",
          "lastName": undefined,
          "mobile": undefined,
          "pOBox": undefined,
          "phone": undefined,
          "postalCode": "27601",
          "region": "North Carolina",
          "salutation": undefined,
          "state": "North Carolina",
          "streetName": "Main Street",
          "streetNumber": "789",
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
