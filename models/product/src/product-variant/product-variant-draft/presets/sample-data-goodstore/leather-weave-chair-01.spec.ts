import type { TProductVariantDraft } from '../../../types';
import leatherWeaveChair01 from './leather-weave-chair-01';

describe(`with leatherWeaveChair01 preset`, () => {
  it(`should return a leatherWeaveChair01 preset`, () => {
    const leatherWeaveChair01Preset =
      leatherWeaveChair01().build<TProductVariantDraft>();
    expect(leatherWeaveChair01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "new-arrival",
      "value": true,
    },
    {
      "name": "color",
      "value": {
        "de-DE": "Sattel braun:#8b4513",
        "en-GB": "Saddle Brown:#8b4513",
        "en-US": "Saddle Brown:#8b4513",
      },
    },
    {
      "name": "finish",
      "value": {
        "de-DE": "Bräunen:#D2B48C",
        "en-GB": "Tan:#D2B48C",
        "en-US": "Tan:#D2B48C",
      },
    },
  ],
  "images": [
    {
      "dimensions": {
        "h": 4400,
        "w": 5500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
    },
    {
      "dimensions": {
        "h": 4500,
        "w": 3375,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
        "centAmount": 39900,
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
        "centAmount": 34900,
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
        "centAmount": 39900,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "BA-092",
}
`);
  });

  it(`should return a leatherWeaveChair01 preset when built for graphql`, () => {
    const leatherWeaveChair01PresetGraphql =
      leatherWeaveChair01().buildGraphql<TProductVariantDraft>();
    expect(leatherWeaveChair01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "new-arrival",
      "value": "true",
    },
    {
      "name": "color",
      "value": "{"en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513","en-US":"Saddle Brown:#8b4513"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C","en-US":"Tan:#D2B48C"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 4400,
        "width": 5500,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
    },
    {
      "dimensions": {
        "height": 4500,
        "width": 3375,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
          "centAmount": 39900,
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
          "centAmount": 34900,
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
          "centAmount": 39900,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "BA-092",
}
`);
  });
});
