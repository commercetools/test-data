import type { TProductVariantDraft } from '../../../types';
import artDecoChair01 from './art-deco-chair-01';

describe(`with artDecoChair01 preset`, () => {
  it(`should return a artDecoChair01 preset`, () => {
    const artDecoChair01Preset = artDecoChair01().build<TProductVariantDraft>();
    expect(artDecoChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage bei Lieferung",
              "en-GB": "- Assembly on delivery",
              "en-US": "- Assembly on delivery",
            },
          },
          {
            "name": "search-color",
            "value": "gray",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Grau",
              "en-GB": "Grey",
              "en-US": "Gray",
            },
          },
          {
            "name": "color-code",
            "value": "#808080",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Chair-1.1.jpeg",
          },
        ],
        "key": "artDecoChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ADARM-04",
      }
    `);
  });

  it(`should return a artDecoChair01 preset when built for graphql`, () => {
    const artDecoChair01PresetGraphql =
      artDecoChair01().buildGraphql<TProductVariantDraft>();
    expect(artDecoChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}",
          },
          {
            "name": "search-color",
            "value": ""gray"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Grey","de-DE":"Grau","en-US":"Gray"}",
          },
          {
            "name": "color-code",
            "value": ""#808080"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Chair-1.1.jpeg",
          },
        ],
        "key": "artDecoChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ADARM-04",
      }
    `);
  });
});
