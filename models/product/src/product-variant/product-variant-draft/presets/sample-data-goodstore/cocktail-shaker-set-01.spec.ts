import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailShakerSet01 from './cocktail-shaker-set-01';

describe(`with cocktailShakerSet01 preset`, () => {
  it(`should return a cocktailShakerSet01 preset`, () => {
    const cocktailShakerSet01Preset =
      cocktailShakerSet01().build<TProductVariantDraft>();
    expect(cocktailShakerSet01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Edelstahl
      - Handwäsche nur",
              "en-GB": "- Stainless steel
      - Hand wash only",
              "en-US": "- Stainless steel
      - Hand wash only",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Gold",
              "en-GB": "Gold",
              "en-US": "Gold",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFD700",
              "label": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#EED149",
              "en-GB": "#EED149",
              "en-US": "#EED149",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5334,
              "w": 4929,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_441132411-JDwT9QfX.jpeg",
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
              "centAmount": 1599,
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
              "centAmount": 1599,
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
              "centAmount": 1599,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "COC-0843",
      }
    `);
  });

  it(`should return a cocktailShakerSet01 preset when built for graphql`, () => {
    const cocktailShakerSet01PresetGraphql =
      cocktailShakerSet01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailShakerSet01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Stainless steel\\n- Hand wash only","de-DE":"- Edelstahl\\n- Handwäsche nur","en-US":"- Stainless steel\\n- Hand wash only"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFD700","label":{"de-DE":"Gold","en-GB":"Gold","en-US":"Gold"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#EED149","de-DE":"#EED149","en-US":"#EED149"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5334,
              "width": 4929,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_441132411-JDwT9QfX.jpeg",
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
                "centAmount": 1599,
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
                "centAmount": 1599,
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
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "COC-0843",
      }
    `);
  });
});
