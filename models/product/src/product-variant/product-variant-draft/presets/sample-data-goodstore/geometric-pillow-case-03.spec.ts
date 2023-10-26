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
            "name": "color",
            "value": {
              "de-DE": "tan",
              "en-GB": "tan",
              "en-US": "tan",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Ivory Tan",
              "en-GB": "Ivory Tan",
              "en-US": "Ivory Tan",
            },
          },
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
            "name": "color-filter",
            "value": {
              "key": "#F5F5DC",
              "label": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.1.jpeg",
          },
          {
            "dimensions": {
              "h": 5000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
            "name": "color",
            "value": "{"en-US":"tan","en-GB":"tan","de-DE":"tan"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Ivory Tan","en-GB":"Ivory Tan","de-DE":"Ivory Tan"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.1.jpeg",
          },
          {
            "dimensions": {
              "height": 5000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.2.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
