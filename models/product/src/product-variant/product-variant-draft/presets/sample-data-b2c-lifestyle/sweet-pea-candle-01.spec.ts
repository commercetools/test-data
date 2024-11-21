import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import sweetPeaCandle01 from './sweet-pea-candle-01';

describe(`with sweetPeaCandle01 preset`, () => {
  it(`should return a sweetPeaCandle01 preset`, () => {
    const sweetPeaCandle01Preset =
      sweetPeaCandle01().build<TProductVariantDraft>();
    expect(sweetPeaCandle01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird im Glas geliefert
      - 180 Gramm",
              "en-GB": "- Comes in glass jar
      - 180 grams",
              "en-US": "- Comes in glass jar
      - 180 grams",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Rosa:#FFC0CB",
              "en-GB": "Pink:#FFC0CB",
              "en-US": "Pink:#FFC0CB",
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
              "h": 3693,
              "w": 5540,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4480,
              "w": 6720,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 4427,
              "w": 6640,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.3.jpeg",
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
            "key": "699EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "699USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SPC-01",
      }
    `);
  });

  it(`should return a sweetPeaCandle01 preset when built for graphql`, () => {
    const sweetPeaCandle01PresetGraphql =
      sweetPeaCandle01().buildGraphql<TProductVariantDraftGraphql>();
    expect(sweetPeaCandle01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Comes in glass jar\\n- 180 grams","en-US":"- Comes in glass jar\\n- 180 grams","de-DE":"- Wird im Glas geliefert\\n- 180 Gramm"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Pink:#FFC0CB","de-DE":"Rosa:#FFC0CB","en-US":"Pink:#FFC0CB"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3693,
              "width": 5540,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4480,
              "width": 6720,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 4427,
              "width": 6640,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.3.jpeg",
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
            "key": "699EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
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
            "key": "699GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
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
            "key": "699USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 699,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SPC-01",
      }
    `);
  });
});
