import type { TProductVariantDraft } from '../../../types';
import charlieArmchair01 from './charlie-armchair-01';

describe(`with charlieArmchair01 preset`, () => {
  it(`should return a charlieArmchair01 preset`, () => {
    const charlieArmchair01Preset =
      charlieArmchair01().build<TProductVariantDraft>();
    expect(charlieArmchair01Preset).toMatchInlineSnapshot(`
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
            "name": "search-color",
            "value": "brown",
          },
          {
            "name": "search-finish",
            "value": "yellow",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Peru",
              "en-GB": "Peru",
              "en-US": "Peru",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#CD853F",
          },
          {
            "name": "finish-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg",
          },
        ],
        "key": "charlieArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "49900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 49900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "49900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 49900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "49900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 49900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "CARM-023",
      }
    `);
  });

  it(`should return a charlieArmchair01 preset when built for graphql`, () => {
    const charlieArmchair01PresetGraphql =
      charlieArmchair01().buildGraphql<TProductVariantDraft>();
    expect(charlieArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","de-DE":"- Nur chemische Reinigung","en-US":"- Dry clean only"}",
          },
          {
            "name": "search-color",
            "value": ""brown"",
          },
          {
            "name": "search-finish",
            "value": ""yellow"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Peru","de-DE":"Peru","en-US":"Peru"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#CD853F"",
          },
          {
            "name": "finish-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg",
          },
        ],
        "key": "charlieArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "49900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 49900,
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
            "key": "49900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 49900,
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
            "key": "49900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 49900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "CARM-023",
      }
    `);
  });
});
