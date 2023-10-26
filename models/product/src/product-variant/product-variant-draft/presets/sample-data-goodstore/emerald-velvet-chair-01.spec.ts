import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import emeraldVelvetChair01 from './emerald-velvet-chair-01';

describe(`with emeraldVelvetChair01 preset`, () => {
  it(`should return a emeraldVelvetChair01 preset`, () => {
    const emeraldVelvetChair01Preset =
      emeraldVelvetChair01().build<TProductVariantDraft>();
    expect(emeraldVelvetChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung",
              "en-GB": "- Dry clean only",
              "en-US": "- Dry clean only",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Smaragd",
              "en-GB": "Emerald",
              "en-US": "Emerald",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#219A0E",
              "en-GB": "#219A0E",
              "en-US": "#219A0E",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#F8EE18",
              "en-GB": "#F8EE18",
              "en-US": "#F8EE18",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#00FF00",
              "label": {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4800,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Emerald_Velvet_Chair-1.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "VARM-09",
      }
    `);
  });

  it(`should return a emeraldVelvetChair01 preset when built for graphql`, () => {
    const emeraldVelvetChair01PresetGraphql =
      emeraldVelvetChair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(emeraldVelvetChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Emerald","de-DE":"Smaragd","en-US":"Emerald"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#219A0E","de-DE":"#219A0E","en-US":"#219A0E"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#F8EE18","de-DE":"#F8EE18","en-US":"#F8EE18"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4800,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Emerald_Velvet_Chair-1.1.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
        "sku": "VARM-09",
      }
    `);
  });
});
