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
              "h": 2990,
              "w": 2848,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2268,
              "w": 2632,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.2.jpeg",
          },
        ],
        "key": "ryeWhiskeyGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499EUR",
            "recurrencePolicy": undefined,
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
            "key": "3499GBP",
            "recurrencePolicy": undefined,
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
            "key": "3499USD",
            "recurrencePolicy": undefined,
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
              "height": 2990,
              "width": 2848,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2268,
              "width": 2632,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.2.jpeg",
          },
        ],
        "key": "ryeWhiskeyGlass01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "3499EUR",
            "recurrencePolicy": undefined,
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
            "key": "3499GBP",
            "recurrencePolicy": undefined,
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
            "key": "3499USD",
            "recurrencePolicy": undefined,
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
