import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import edgarArmchair01 from './edgar-armchair-01';

describe(`with edgarArmchair01 preset`, () => {
  it(`should return a edgarArmchair01 preset`, () => {
    const edgarArmchair01Preset =
      edgarArmchair01().build<TProductVariantDraft>();
    expect(edgarArmchair01Preset).toMatchInlineSnapshot(`
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
            "name": "color",
            "value": {
              "de-DE": "Helles Oliv:#BAB86C",
              "en-GB": "Light Olive:#BAB86C",
              "en-US": "Light Olive:#BAB86C",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "Schwarz:#000000",
              "en-GB": "Black:#000000",
              "en-US": "Black:#000000",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Edgar_Armchair-1.1.jpeg",
          },
        ],
        "key": "edgarArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 129900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "EARM-04",
      }
    `);
  });

  it(`should return a edgarArmchair01 preset when built for graphql`, () => {
    const edgarArmchair01PresetGraphql =
      edgarArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(edgarArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly on delivery","de-DE":"- Montage bei Lieferung","en-US":"- Assembly on delivery"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Light Olive:#BAB86C","de-DE":"Helles Oliv:#BAB86C","en-US":"Light Olive:#BAB86C"}",
          },
          {
            "name": "finish",
            "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Edgar_Armchair-1.1.jpeg",
          },
        ],
        "key": "edgarArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "129900EUR",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900GBP",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
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
            "key": "129900USD",
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "EARM-04",
      }
    `);
  });
});
