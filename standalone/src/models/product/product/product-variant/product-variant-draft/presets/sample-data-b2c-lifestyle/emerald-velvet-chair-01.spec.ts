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
            "name": "search-color",
            "value": [
              {
                "de-DE": "Grün",
                "en-GB": "Green",
                "en-US": "Green",
              },
            ],
          },
          {
            "name": "search-finish",
            "value": [
              {
                "de-DE": "Braun",
                "en-GB": "Brown",
                "en-US": "Brown",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Grün",
              "en-GB": "Green",
              "en-US": "Green",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Burlywood",
              "en-GB": "Burlywood",
              "en-US": "Burlywood",
            },
          },
          {
            "name": "color-code",
            "value": "#008000",
          },
          {
            "name": "finish-code",
            "value": "#deb887",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4800,
              "w": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Emerald_Velvet_Chair-1.1.jpeg",
          },
        ],
        "key": "emeraldVelvetChair01",
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
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Green","de-DE":"Grün","en-US":"Green"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Burlywood","de-DE":"Burlywood","en-US":"Burlywood"}",
          },
          {
            "name": "color-code",
            "value": ""#008000"",
          },
          {
            "name": "finish-code",
            "value": ""#deb887"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4800,
              "width": 6000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Emerald_Velvet_Chair-1.1.jpeg",
          },
        ],
        "key": "emeraldVelvetChair01",
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
        "sku": "VARM-09",
      }
    `);
  });
});
