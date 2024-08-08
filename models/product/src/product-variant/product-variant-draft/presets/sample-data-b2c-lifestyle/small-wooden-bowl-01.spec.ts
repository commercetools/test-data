import type { TProductVariantDraft } from '../../../types';
import smallWoodenBowl01 from './small-wooden-bowl-01';

describe(`with smallWoodenBowl01 preset`, () => {
  it(`should return a smallWoodenBowl01 preset`, () => {
    const smallWoodenBowl01Preset =
      smallWoodenBowl01().build<TProductVariantDraft>();
    expect(smallWoodenBowl01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Enthält 1 Schüssel",
        "en-GB": "- Includes 1 bowl",
        "en-US": "- Includes 1 bowl",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Sattel braun:#8b4513",
        "en-GB": "Saddle Brown:#8b4513",
        "en-US": "Saddle Brown:#8b4513",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 2500,
        "w": 3241,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 3456,
        "w": 5184,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.3.jpeg",
    },
    {
      "dimensions": {
        "h": 4096,
        "w": 6144,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.4.jpeg",
    },
    {
      "dimensions": {
        "h": 5133,
        "w": 7696,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.2.jpeg",
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
        "centAmount": 399,
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
        "centAmount": 399,
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
        "centAmount": 399,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "SWB-01",
}
`);
  });

  it(`should return a smallWoodenBowl01 preset when built for graphql`, () => {
    const smallWoodenBowl01PresetGraphql =
      smallWoodenBowl01().buildGraphql<TProductVariantDraft>();
    expect(smallWoodenBowl01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Includes 1 bowl","en-US":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513","en-US":"Saddle Brown:#8b4513"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 2500,
        "width": 3241,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 3456,
        "width": 5184,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.3.jpeg",
    },
    {
      "dimensions": {
        "height": 4096,
        "width": 6144,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.4.jpeg",
    },
    {
      "dimensions": {
        "height": 5133,
        "width": 7696,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.2.jpeg",
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
          "centAmount": 399,
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
          "centAmount": 399,
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
          "centAmount": 399,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "SWB-01",
}
`);
  });
});
