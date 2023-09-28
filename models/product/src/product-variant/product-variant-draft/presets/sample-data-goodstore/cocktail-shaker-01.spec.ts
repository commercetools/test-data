import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import cocktailShaker01 from './cocktail-shaker-01';

describe(`with cocktailShaker01 preset`, () => {
  it(`should return a cocktailShaker01 preset`, () => {
    const cocktailShaker01Preset =
      cocktailShaker01().build<TProductVariantDraft>();
    expect(cocktailShaker01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Inklusive eingebautem Sieb
      - Edelstahl
      - Spülmaschinenfest",
              "en-GB": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
              "en-US": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 5500,
              "w": 3850,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74255917-W96v6fME.jpeg",
          },
          {
            "dimensions": {
              "h": 3750,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74620379%20-og0Draq4.jpeg",
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
            "key": undefined,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 699,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "COCT-09",
      }
    `);
  });

  it(`should return a cocktailShaker01 preset when built for graphql`, () => {
    const cocktailShaker01PresetGraphql =
      cocktailShaker01().buildGraphql<TProductVariantDraftGraphql>();
    expect(cocktailShaker01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes built in strainer\\n- Stainless steel\\n- Dishwasher safe","de-DE":"- Inklusive eingebautem Sieb\\n- Edelstahl\\n- Spülmaschinenfest","en-US":"- Includes built in strainer\\n- Stainless steel\\n- Dishwasher safe"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 5500,
              "width": 3850,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74255917-W96v6fME.jpeg",
          },
          {
            "dimensions": {
              "height": 3750,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_74620379%20-og0Draq4.jpeg",
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
            "key": undefined,
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
            "key": undefined,
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
        "sku": "COCT-09",
      }
    `);
  });
});
