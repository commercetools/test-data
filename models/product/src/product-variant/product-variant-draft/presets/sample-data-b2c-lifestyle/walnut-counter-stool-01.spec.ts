import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import walnutCounterStool01 from './walnut-counter-stool-01';

describe(`with walnutCounterStool01 preset`, () => {
  it(`should return a walnutCounterStool01 preset`, () => {
    const walnutCounterStool01Preset =
      walnutCounterStool01().build<TProductVariantDraft>();
    expect(walnutCounterStool01Preset).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": {
        "de-DE": "- Beinhaltet 1 Hocker",
        "en-GB": "- Includes 1 stool",
        "en-US": "- Includes 1 stool",
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
        "h": 5906,
        "w": 5906,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Counter_Stool-1.1.jpeg",
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
        "centAmount": 8999,
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
        "centAmount": 8999,
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
        "centAmount": 8999,
        "currencyCode": "USD",
      },
    },
  ],
  "sku": "WCSI-09",
}
`);
  });

  it(`should return a walnutCounterStool01 preset when built for graphql`, () => {
    const walnutCounterStool01PresetGraphql =
      walnutCounterStool01().buildGraphql<TProductVariantDraftGraphql>();
    expect(walnutCounterStool01PresetGraphql).toMatchInlineSnapshot(`
{
  "assets": undefined,
  "attributes": [
    {
      "name": "productspec",
      "value": "{"en-GB":"- Includes 1 stool","en-US":"- Includes 1 stool","de-DE":"- Beinhaltet 1 Hocker"}",
    },
    {
      "name": "finish",
      "value": "{"en-GB":"Saddle Brown:#8b4513","en-US":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
    },
  ],
  "images": [
    {
      "dimensions": {
        "height": 5906,
        "width": 5906,
      },
      "label": undefined,
      "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Counter_Stool-1.1.jpeg",
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
          "centAmount": 8999,
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
          "centAmount": 8999,
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
          "centAmount": 8999,
          "currencyCode": "USD",
        },
      },
    },
  ],
  "sku": "WCSI-09",
}
`);
  });
});
