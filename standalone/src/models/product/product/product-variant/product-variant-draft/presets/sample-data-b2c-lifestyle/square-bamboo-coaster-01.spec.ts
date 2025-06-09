import type { TProductVariantDraft } from '../../../types';
import squareBambooCoaster01 from './square-bamboo-coaster-01';

describe(`with squareBambooCoaster01 preset`, () => {
  it(`should return a squareBambooCoaster01 preset`, () => {
    const squareBambooCoaster01Preset =
      squareBambooCoaster01().build<TProductVariantDraft>();
    expect(squareBambooCoaster01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Mit einem feuchten Tuch abwischen
      - Das Set enthält 4 Untersetzer",
              "en-GB": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
              "en-US": "- Wipe clean with wet cloth
      - Set includes 4 coaster",
            },
          },
          {
            "name": "search-color",
            "value": [
              "yellow",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Weizen",
              "en-GB": "Wheat",
              "en-US": "Wheat",
            },
          },
          {
            "name": "color-code",
            "value": "#f5deb3",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2912,
              "w": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Square_Bamboo_Coaster-1.1.jpeg",
          },
        ],
        "key": "squareBambooCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1099,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "BAMB-084",
      }
    `);
  });

  it(`should return a squareBambooCoaster01 preset when built for graphql`, () => {
    const squareBambooCoaster01PresetGraphql =
      squareBambooCoaster01().buildGraphql<TProductVariantDraft>();
    expect(squareBambooCoaster01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Wipe clean with wet cloth\\n- Set includes 4 coaster","en-US":"- Wipe clean with wet cloth\\n- Set includes 4 coaster","de-DE":"- Mit einem feuchten Tuch abwischen\\n- Das Set enthält 4 Untersetzer"}",
          },
          {
            "name": "search-color",
            "value": "["yellow"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Wheat","de-DE":"Weizen","en-US":"Wheat"}",
          },
          {
            "name": "color-code",
            "value": ""#f5deb3"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2912,
              "width": 2912,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Square_Bamboo_Coaster-1.1.jpeg",
          },
        ],
        "key": "squareBambooCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1099EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
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
            "key": "1099GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
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
            "key": "1099USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1099,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "BAMB-084",
      }
    `);
  });
});
