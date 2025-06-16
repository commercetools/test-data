import type { TProductVariantDraft } from '../../../types';
import geometricPillowCase02 from './geometric-pillow-case-02';

describe(`with geometricPillowCase02 preset`, () => {
  it(`should return a geometricPillowCase02 preset`, () => {
    const geometricPillowCase02Preset =
      geometricPillowCase02().build<TProductVariantDraft>();
    expect(geometricPillowCase02Preset).toMatchInlineSnapshot(`
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
            "value": "pink",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Hell rosa",
              "en-GB": "Light Pink",
              "en-US": "Light Pink",
            },
          },
          {
            "name": "color-code",
            "value": "#FFB6C1",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.1.jpeg",
          },
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.2.jpeg",
          },
        ],
        "key": "geometricPillowCase02",
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
        "sku": "GPC-02",
      }
    `);
  });

  it(`should return a geometricPillowCase02 preset when built for graphql`, () => {
    const geometricPillowCase02PresetGraphql =
      geometricPillowCase02().buildGraphql<TProductVariantDraft>();
    expect(geometricPillowCase02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
          },
          {
            "name": "search-color",
            "value": ""pink"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Light Pink","de-DE":"Hell rosa","en-US":"Light Pink"}",
          },
          {
            "name": "color-code",
            "value": ""#FFB6C1"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.1.jpeg",
          },
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.2.jpeg",
          },
        ],
        "key": "geometricPillowCase02",
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
        "sku": "GPC-02",
      }
    `);
  });
});
