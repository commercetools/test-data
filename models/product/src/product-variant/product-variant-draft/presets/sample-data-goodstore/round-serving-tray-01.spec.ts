import type { TProductVariantDraft } from '../../../types';
import roundServingTray01 from './round-serving-tray-01';

describe(`with roundServingTray01 preset`, () => {
  it(`should return a roundServingTray01 preset`, () => {
    const roundServingTray01Preset =
      roundServingTray01().build<TProductVariantDraft>();
    expect(roundServingTray01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Handwäsche nur",
        "en-GB": "- Hand wash only",
        "en-US": "- Hand wash only",
      },
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Braun:#a52a2a",
        "en-GB": "Brown:#a52a2a",
        "en-US": "Brown:#a52a2a",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 3537,
        "w": 3537,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 1719,
        "w": 3283,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.2.jpeg",
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
        "centAmount": 499,
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
        "centAmount": 499,
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
        "centAmount": 499,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "RST-01",
}
`);
  });

  it(`should return a roundServingTray01 preset when built for graphql`, () => {
    const roundServingTray01PresetGraphql =
      roundServingTray01().buildGraphql<TProductVariantDraft>();
    expect(roundServingTray01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Hand wash only","en-US":"- Hand wash only","de-DE":"- Handwäsche nur"}",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Brown:#a52a2a","de-DE":"Braun:#a52a2a","en-US":"Brown:#a52a2a"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 3537,
        "width": 3537,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 1719,
        "width": 3283,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.2.jpeg",
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
          "centAmount": 499,
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
          "centAmount": 499,
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
          "centAmount": 499,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "RST-01",
}
`);
  });
});
