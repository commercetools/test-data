import type { TProductVariantDraft } from '../../../types';
import charcoalChair01 from './charcoal-chair-01';

describe(`with charcoalChair01 preset`, () => {
  it(`should return a charcoalChair01 preset`, () => {
    const charcoalChair01Preset =
      charcoalChair01().build<TProductVariantDraft>();
    expect(charcoalChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Beinhaltet 1 Stuhl",
              "en-GB": "- Includes 1 chair",
              "en-US": "- Includes 1 chair",
            },
          },
          {
            "name": "search-color",
            "value": "gray",
          },
          {
            "name": "search-finish",
            "value": "yellow",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Dunkles Schiefer grau",
              "en-GB": "Dark Slate Grey",
              "en-US": "Dark Slate Gray",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#2F4F4F",
          },
          {
            "name": "finish-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5309,
              "w": 3300,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 5906,
              "w": 5906,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.1.jpeg",
          },
        ],
        "key": "charcoalChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 9900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CCH-093",
      }
    `);
  });

  it(`should return a charcoalChair01 preset when built for graphql`, () => {
    const charcoalChair01PresetGraphql =
      charcoalChair01().buildGraphql<TProductVariantDraft>();
    expect(charcoalChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
          },
          {
            "name": "search-color",
            "value": ""gray"",
          },
          {
            "name": "search-finish",
            "value": ""yellow"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Dark Slate Grey","de-DE":"Dunkles Schiefer grau","en-US":"Dark Slate Gray"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#2F4F4F"",
          },
          {
            "name": "finish-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5309,
              "width": 3300,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 5906,
              "width": 5906,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.1.jpeg",
          },
        ],
        "key": "charcoalChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "9900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9900,
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
            "key": "9900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9900,
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
            "key": "9900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 9900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CCH-093",
      }
    `);
  });
});
