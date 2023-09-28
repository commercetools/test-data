import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import fawnArmchair01 from './fawn-armchair-01';

describe(`with fawnArmchair01 preset`, () => {
  it(`should return a fawnArmchair01 preset`, () => {
    const fawnArmchair01Preset = fawnArmchair01().build<TProductVariantDraft>();
    expect(fawnArmchair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Leder erfordert besondere Pflege",
              "en-GB": "- Leather requires special care",
              "en-US": "- Leather requires special care",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#FFF8ED",
              "en-GB": "#FFF8ED",
              "en-US": "#FFF8ED",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Weißes Leder",
              "en-GB": "White Leather",
              "en-US": "White Leather",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Kastanie",
              "en-GB": "Chestnut",
              "en-US": "Chestnut",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#1B1101",
              "en-GB": "#1B1101",
              "en-US": "#1B1101",
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
              "h": 3200,
              "w": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Fawn%20Armchair-aPr3Rbhn.jpeg",
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
              "centAmount": 59900,
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
              "centAmount": 59900,
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
              "centAmount": 59900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "FARM-05",
      }
    `);
  });

  it(`should return a fawnArmchair01 preset when built for graphql`, () => {
    const fawnArmchair01PresetGraphql =
      fawnArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(fawnArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Leather requires special care","de-DE":"- Leder erfordert besondere Pflege","en-US":"- Leather requires special care"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#FFF8ED","de-DE":"#FFF8ED","en-US":"#FFF8ED"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"White Leather","de-DE":"Weißes Leder","en-US":"White Leather"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-GB":"Chestnut","de-DE":"Kastanie","en-US":"Chestnut"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"#1B1101","de-DE":"#1B1101","en-US":"#1B1101"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3200,
              "width": 2400,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Fawn%20Armchair-aPr3Rbhn.jpeg",
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
                "centAmount": 59900,
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
                "centAmount": 59900,
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
                "centAmount": 59900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "FARM-05",
      }
    `);
  });
});
