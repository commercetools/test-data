import type { TProductVariantDraft } from '../../../types';
import brunoChair from './bruno-chair-01';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductVariantDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Beinhaltet 1 Stuhl",
        "en-GB": "- Includes 1 chair",
        "en-US": "- Includes 1 chair",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Königs blau:#4169E1",
        "en-GB": "Royal Blue:#4169E1",
        "en-US": "Royal Blue:#4169E1",
      },
    },
    {
      "name": "finish",
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
        "h": 4315,
        "w": 6473,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Bruno_Chair-1.1.jpeg",
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
        "centAmount": 7999,
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
        "centAmount": 7999,
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
        "centAmount": 7999,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "BARM-03",
}
`);
  });

  it(`should return a brunoChair preset when built for graphql`, () => {
    const brunoChairPresetGraphql =
      brunoChair().buildGraphql<TProductVariantDraft>();
    expect(brunoChairPresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Royal Blue:#4169E1","de-DE":"Königs blau:#4169E1","en-US":"Royal Blue:#4169E1"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513","en-US":"Saddle Brown:#8b4513"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4315,
        "width": 6473,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Bruno_Chair-1.1.jpeg",
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
          "centAmount": 7999,
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
          "centAmount": 7999,
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
          "centAmount": 7999,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "BARM-03",
}
`);
  });
});
