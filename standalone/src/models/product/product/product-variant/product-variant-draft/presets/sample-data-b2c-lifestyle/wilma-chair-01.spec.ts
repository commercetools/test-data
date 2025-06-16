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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Weiß",
                "en-GB": "White",
                "en-US": "White",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Blumen weiß",
              "en-GB": "Floral White",
              "en-US": "Floral White",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Schwarz",
              "en-GB": "Black",
              "en-US": "Black",
            },
          },
          {
            "name": "color-code",
            "value": "#FFFAF0",
          },
          {
            "name": "finish-code",
            "value": "#000000",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg",
          },
        ],
        "key": "wilmaChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
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
            "key": "29900GBP",
            "recurrencePolicy": undefined,
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
            "key": "29900USD",
            "recurrencePolicy": undefined,
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
            "name": "search-color",
            "value": "[{"en-US":"White","en-GB":"White","de-DE":"Weiß"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Floral White","de-DE":"Blumen weiß","en-US":"Floral White"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFAF0"",
          },
          {
            "name": "finish-code",
            "value": ""#000000"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg",
          },
        ],
        "key": "wilmaChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
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
            "key": "29900GBP",
            "recurrencePolicy": undefined,
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
            "key": "29900USD",
            "recurrencePolicy": undefined,
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
