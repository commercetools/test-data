import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import turnerVelvetArmchair01 from './turner-velvet-armchair-01';

describe(`with turnerVelvetArmchair01 preset`, () => {
  it(`should return a turnerVelvetArmchair01 preset`, () => {
    const turnerVelvetArmchair01Preset =
      turnerVelvetArmchair01().build<TProductVariantDraft>();
    expect(turnerVelvetArmchair01Preset).toMatchInlineSnapshot(`
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
            "value": [
              "blue",
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Königs blau",
              "en-GB": "Royal Blue",
              "en-US": "Royal Blue",
            },
          },
          {
            "name": "color-code",
            "value": "#4169E1",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.2.jpeg",
          },
        ],
        "key": "turnerVelvetArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 39900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "TARM-03",
      }
    `);
  });

  it(`should return a turnerVelvetArmchair01 preset when built for graphql`, () => {
    const turnerVelvetArmchair01PresetGraphql =
      turnerVelvetArmchair01().buildGraphql<TProductVariantDraftGraphql>();
    expect(turnerVelvetArmchair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only","en-US":"- Dry clean only","de-DE":"- Nur chemische Reinigung"}",
          },
          {
            "name": "search-color",
            "value": "["blue"]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Royal Blue","de-DE":"Königs blau","en-US":"Royal Blue"}",
          },
          {
            "name": "color-code",
            "value": ""#4169E1"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 2500,
              "width": 2500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.2.jpeg",
          },
        ],
        "key": "turnerVelvetArmchair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "39900EUR",
            "recurrencePolicy": undefined,
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
            "key": "39900GBP",
            "recurrencePolicy": undefined,
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
            "key": "39900USD",
            "recurrencePolicy": undefined,
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
        "sku": "TARM-03",
      }
    `);
  });
});
