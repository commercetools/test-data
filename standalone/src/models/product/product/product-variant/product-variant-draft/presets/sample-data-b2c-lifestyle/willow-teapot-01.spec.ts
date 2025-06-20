import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import willowTeapot01 from './willow-teapot-01';

describe(`with willowTeapot01 preset`, () => {
  it(`should return a willowTeapot01 preset`, () => {
    const willowTeapot01Preset = willowTeapot01().build<TProductVariantDraft>();
    expect(willowTeapot01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Handwäsche nur",
              "en-GB": "- Hand wash only",
              "en-US": "- Hand wash only",
            },
          },
          {
            "name": "search-color",
            "value": "blue",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Himmel blau",
              "en-GB": "Sky Blue",
              "en-US": "Sky Blue",
            },
          },
          {
            "name": "color-code",
            "value": "#87CEEB",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Willow_Teapot-1.1.jpeg",
          },
        ],
        "key": "willowTeapot01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 899,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 899,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 899,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "WTP-09",
      }
    `);
  });

  it(`should return a willowTeapot01 preset when built for graphql`, () => {
    const willowTeapot01PresetGraphql =
      willowTeapot01().buildGraphql<TProductVariantDraftGraphql>();
    expect(willowTeapot01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Hand wash only","en-US":"- Hand wash only","de-DE":"- Handwäsche nur"}",
          },
          {
            "name": "search-color",
            "value": ""blue"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Sky Blue","de-DE":"Himmel blau","en-US":"Sky Blue"}",
          },
          {
            "name": "color-code",
            "value": ""#87CEEB"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Willow_Teapot-1.1.jpeg",
          },
        ],
        "key": "willowTeapot01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "899EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 899,
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
            "key": "899GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 899,
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
            "key": "899USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 899,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "WTP-09",
      }
    `);
  });
});
