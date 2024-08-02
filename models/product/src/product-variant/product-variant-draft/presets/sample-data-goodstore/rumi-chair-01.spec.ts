import type { TProductVariantDraft } from '../../../types';
import rumiChair01 from './rumi-chair-01';

describe(`with rumiChair01 preset`, () => {
  it(`should return a rumiChair01 preset`, () => {
    const rumiChair01Preset = rumiChair01().build<TProductVariantDraft>();
    expect(rumiChair01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Nur chemische Reinigung",
        "en-GB": "- Dry clean only",
        "en-US": "- Dry clean only",
      },
    },
    {
      "name": "color-filter",
      "value": {
        "key": "#A020F0",
        "label": {
          "de-DE": "Lila",
          "en-GB": "Purple",
          "en-US": "Purple",
        },
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Lavendel:#fff0f5",
        "en-GB": "Lavender Blush:#fff0f5",
        "en-US": "Lavender Blush:#fff0f5",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Gold:#FFD700",
        "en-GB": "Gold:#FFD700",
        "en-US": "Gold:#FFD700",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3200,
        "w": 2400,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rumi_Chair-1.1.jpeg",
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
        "centAmount": 12999,
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
        "centAmount": 12999,
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
        "centAmount": 15000,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "RAM-094",
}
`);
  });

  it(`should return a rumiChair01 preset when built for graphql`, () => {
    const rumiChair01PresetGraphql =
      rumiChair01().buildGraphql<TProductVariantDraft>();
    expect(rumiChair01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
    },
    {
      "name": "color-filter",
      "value": "{"key":"#A020F0","label":{"de-DE":"Lila","en-GB":"Purple","en-US":"Purple"}}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Lavender Blush:#fff0f5","de-DE":"Lavendel:#fff0f5","en-US":"Lavender Blush:#fff0f5"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Gold:#FFD700","en-US":"Gold:#FFD700","de-DE":"Gold:#FFD700"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3200,
        "width": 2400,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rumi_Chair-1.1.jpeg",
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
          "centAmount": 12999,
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
          "centAmount": 12999,
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
          "centAmount": 15000,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "RAM-094",
}
`);
  });
});
