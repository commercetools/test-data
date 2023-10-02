import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernGlamDresser01 from './modern-glam-dresser-01';

describe(`with modernGlamDresser01 preset`, () => {
  it(`should return a modernGlamDresser01 preset`, () => {
    const modernGlamDresser01Preset =
      modernGlamDresser01().build<TProductVariantDraft>();
    expect(modernGlamDresser01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finish",
            "value": {
              "de-DE": "silver",
              "en-GB": "#8A8071",
              "en-US": "silver",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Suede",
              "en-GB": "Suede",
              "en-US": "Suede",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
              "en-GB": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
              "en-US": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#C0C0C0",
              "label": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650073-NL2GuIBX.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650236-phU3WdJ7.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305652757--mQZtlpW.jpeg",
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
              "centAmount": 179900,
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
              "centAmount": 179900,
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
              "centAmount": 179900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MGD-01",
      }
    `);
  });

  it(`should return a modernGlamDresser01 preset when built for graphql`, () => {
    const modernGlamDresser01PresetGraphql =
      modernGlamDresser01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernGlamDresser01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "finish",
            "value": "{"en-US":"silver","en-GB":"#8A8071","de-DE":"silver"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Suede","en-GB":"Suede","de-DE":"Suede"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","en-GB":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","de-DE":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650073-NL2GuIBX.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650236-phU3WdJ7.jpeg",
          },
          {
            "dimensions": {
              "height": 3840,
              "width": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305652757--mQZtlpW.jpeg",
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
                "centAmount": 179900,
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
                "centAmount": 179900,
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
                "centAmount": 179900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MGD-01",
      }
    `);
  });
});
