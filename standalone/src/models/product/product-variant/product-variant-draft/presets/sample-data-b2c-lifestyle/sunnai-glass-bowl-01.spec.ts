import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import sunnaiGlassBowl01 from './sunnai-glass-bowl-01';

describe(`with sunnaiGlassBowl01 preset`, () => {
  it(`should return a sunnaiGlassBowl01 preset`, () => {
    const sunnaiGlassBowl01Preset =
      sunnaiGlassBowl01().build<TProductVariantDraft>();
    expect(sunnaiGlassBowl01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": [
              {
                "en-GB": "Round",
              },
            ],
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Transparent:transparent",
              "en-GB": "Transparent:transparent",
              "en-US": "Transparent:transparent",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Glas:transparent",
              "en-GB": "Glass:transparent",
              "en-US": "Glass:transparent",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3739,
              "w": 5381,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
          },
        ],
        "key": "sunnaiGlassBowl01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 799,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });

  it(`should return a sunnaiGlassBowl01 preset when built for graphql`, () => {
    const sunnaiGlassBowl01PresetGraphql =
      sunnaiGlassBowl01().buildGraphql<TProductVariantDraftGraphql>();
    expect(sunnaiGlassBowl01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "type",
            "value": "[{"en-GB":"Round"}]",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3739,
              "width": 5381,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg",
          },
        ],
        "key": "sunnaiGlassBowl01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "799EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
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
            "key": "799GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
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
            "key": "799USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 799,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SGB-01",
      }
    `);
  });
});
