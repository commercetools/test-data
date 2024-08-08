import type { TProductVariantDraft } from '../../../types';
import greenServingPlate01 from './green-serving-plate-01';

describe(`with greenServingPlate01 preset`, () => {
  it(`should return a greenServingPlate01 preset`, () => {
    const greenServingPlate01Preset =
      greenServingPlate01().build<TProductVariantDraft>();
    expect(greenServingPlate01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Enthält 1 Teller",
        "en-GB": "- Includes 1 plate",
        "en-US": "- Includes 1 plate",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Grün:#008000",
        "en-GB": "Green:#008000",
        "en-US": "Green:#008000",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 4426,
        "w": 4631,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 3653,
        "w": 5705,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 599,
        "currencyCode": "EUR",
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 599,
        "currencyCode": "GBP",
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centAmount": 599,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "GC-01",
}
`);
  });

  it(`should return a greenServingPlate01 preset when built for graphql`, () => {
    const greenServingPlate01PresetGraphql =
      greenServingPlate01().buildGraphql<TProductVariantDraft>();
    expect(greenServingPlate01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Green:#008000","de-DE":"Grün:#008000","en-US":"Green:#008000"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4426,
        "width": 4631,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 3653,
        "width": 5705,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.2.jpeg",
    },
  ],
  "key": undefined,
  "prices": [
    {
      "channel": undefined,
      "country": "DE",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 599,
          "currencyCode": "EUR",
        },
      },
    },
    {
      "channel": undefined,
      "country": "GB",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 599,
          "currencyCode": "GBP",
        },
      },
    },
    {
      "channel": undefined,
      "country": "US",
      "custom": undefined,
      "customerGroup": undefined,
      "discounted": undefined,
      "key": undefined,
      "tiers": undefined,
      "validFrom": undefined,
      "validUntil": undefined,
      "value": {
        "centPrecision": {
          "centAmount": 599,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "GC-01",
}
`);
  });
});
