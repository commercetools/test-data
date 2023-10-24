import type { TProductVariantDraft } from '../../../types';
import ryeWhiskeyGlass01 from './rye-whiskey-glass-01';

describe(`with ryeWhiskeyGlass01 preset`, () => {
  it(`should return a ryeWhiskeyGlass01 preset`, () => {
    const ryeWhiskeyGlass01Preset =
      ryeWhiskeyGlass01().build<TProductVariantDraft>();
    expect(ryeWhiskeyGlass01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Das Set enthält 6 Gläser",
              "en-GB": "- Set includes 6 glasses",
              "en-US": "- Set includes 6 glasses",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2990,
              "w": 2848,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2268,
              "w": 2632,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg",
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
              "centAmount": 3499,
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
              "centAmount": 3499,
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
              "centAmount": 3499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RWG-09",
      }
    `);
  });

  it(`should return a ryeWhiskeyGlass01 preset when built for graphql`, () => {
    const ryeWhiskeyGlass01PresetGraphql =
      ryeWhiskeyGlass01().buildGraphql<TProductVariantDraft>();
    expect(ryeWhiskeyGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","en-US":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2990,
              "width": 2848,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2268,
              "width": 2632,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg",
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
                "centAmount": 3499,
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
                "centAmount": 3499,
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
                "centAmount": 3499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RWG-09",
      }
    `);
  });
});
