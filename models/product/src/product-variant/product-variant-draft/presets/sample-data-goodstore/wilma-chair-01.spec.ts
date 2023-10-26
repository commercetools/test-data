import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import wilmaChair01 from './wilma-chair-01';

describe(`with wilmaChair01 preset`, () => {
  it(`should return a wilmaChair01 preset`, () => {
    const wilmaChair01Preset = wilmaChair01().build<TProductVariantDraft>();
    expect(wilmaChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Kissenbezüge sind abnehmbar und maschinenwaschbar",
              "en-GB": "- Cushion covers are removable and machine washable",
              "en-US": "- Cushion covers are removable and machine washable",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Creme",
              "en-GB": "Cream",
              "en-US": "Cream",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Schwarzes Eisen",
              "en-GB": "Black Iron",
              "en-US": "Black Iron",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#000",
              "en-GB": "#000",
              "en-US": "#000",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#E4DCC1",
              "en-GB": "#E4DCC1",
              "en-US": "#E4DCC1",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFFFF0",
              "label": {
                "de-DE": "Elfenbein",
                "en-GB": "Ivory",
                "en-US": "Ivory",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.2.jpeg",
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
              "centAmount": 29900,
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
              "centAmount": 29900,
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
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "NJOP-09",
      }
    `);
  });

  it(`should return a wilmaChair01 preset when built for graphql`, () => {
    const wilmaChair01PresetGraphql =
      wilmaChair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(wilmaChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Cushion covers are removable and machine washable","en-US":"- Cushion covers are removable and machine washable","de-DE":"- Kissenbezüge sind abnehmbar und maschinenwaschbar"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Cream","de-DE":"Creme","en-US":"Cream"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Black Iron","de-DE":"Schwarzes Eisen","en-US":"Black Iron"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#000","en-US":"#000","de-DE":"#000"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#E4DCC1","de-DE":"#E4DCC1","en-US":"#E4DCC1"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.2.jpeg",
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
                "centAmount": 29900,
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
                "centAmount": 29900,
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
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "NJOP-09",
      }
    `);
  });
});
