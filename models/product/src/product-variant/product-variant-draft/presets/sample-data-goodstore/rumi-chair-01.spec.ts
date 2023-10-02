import type { TProductVariantDraft } from '../../../types';
import rumiChair01 from './rumi-chair-01';

describe(`with rumiChair01 preset`, () => {
  it(`should return a rumiChair01 preset`, () => {
    const rumiChair01Preset = rumiChair01().build<TProductVariantDraft>();
    expect(rumiChair01Preset).toMatchInlineSnapshot(`
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
            "name": "color-filter",
            "value": {
              "key": "#A020F0",
              "label": {
                "de-DE": "Lila",
                "en-GB": "Purple",
                "en-US": "Purple",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#968289",
              "en-GB": "#968289",
              "en-US": "#968289",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Mauve",
              "en-GB": "Mauve",
              "en-US": "Mauve",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#DAB555",
              "en-GB": "#DAB555",
              "en-US": "#DAB555",
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
        ],
        "images": [
          {
            "dimensions": {
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rumi%20Chair-3pTPQ9ss.jpeg",
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
              "centAmount": 12999,
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
              "centAmount": 12999,
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
              "centAmount": 15000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "RAM-094",
      }
    `);
  });

  it(`should return a rumiChair01 preset when built for graphql`, () => {
    const rumiChair01PresetGraphql =
      rumiChair01().buildGraphql<TProductVariantDraft>();
    expect(rumiChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#A020F0","label":{"de-DE":"Lila","en-GB":"Purple","en-US":"Purple"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#968289","de-DE":"#968289","en-US":"#968289"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Mauve","de-DE":"Mauve","en-US":"Mauve"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#DAB555","en-US":"#DAB555","de-DE":"#DAB555"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rumi%20Chair-3pTPQ9ss.jpeg",
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
                "centAmount": 12999,
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
                "centAmount": 12999,
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
                "centAmount": 15000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "RAM-094",
      }
    `);
  });
});
