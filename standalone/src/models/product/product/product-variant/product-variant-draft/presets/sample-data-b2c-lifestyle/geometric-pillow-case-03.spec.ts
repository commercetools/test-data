import type { TProductVariantDraft } from '../../../types';
import geometricPillowCase03 from './geometric-pillow-case-03';

describe(`with geometricPillowCase03 preset`, () => {
  it(`should return a geometricPillowCase03 preset`, () => {
    const geometricPillowCase03Preset =
      geometricPillowCase03().build<TProductVariantDraft>();
    expect(geometricPillowCase03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
              "en-GB": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
              "en-US": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable
      ",
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
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.1.jpeg",
          },
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.2.jpeg",
          },
        ],
        "key": "geometricPillowCase03",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1999,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "GPC-03",
      }
    `);
  });

  it(`should return a geometricPillowCase03 preset when built for graphql`, () => {
    const geometricPillowCase03PresetGraphql =
      geometricPillowCase03().buildGraphql<TProductVariantDraft>();
    expect(geometricPillowCase03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
          },
          {
            "name": "search-color",
            "value": "["yellow"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.1.jpeg",
          },
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.2.jpeg",
          },
        ],
        "key": "geometricPillowCase03",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1999EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
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
            "key": "1999USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "GPC-03",
      }
    `);
  });
});
