import type { TProductVariantDraft } from '../../../types';
import leatherCoaster01 from './leather-coaster-01';

describe(`with leatherCoaster01 preset`, () => {
  it(`should return a leatherCoaster01 preset`, () => {
    const leatherCoaster01Preset =
      leatherCoaster01().build<TProductVariantDraft>();
    expect(leatherCoaster01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 4 Untersetzer",
              "en-GB": "- Includes 4 coasters",
              "en-US": "- Includes 4 coasters",
            },
          },
          {
            "name": "color",
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
              "h": 2864,
              "w": 2864,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Coaster-1.1.jpeg",
          },
        ],
        "key": "leatherCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2499EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2499,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2499GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2499,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2499USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LCO-034",
      }
    `);
  });

  it(`should return a leatherCoaster01 preset when built for graphql`, () => {
    const leatherCoaster01PresetGraphql =
      leatherCoaster01().buildGraphql<TProductVariantDraft>();
    expect(leatherCoaster01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 4 coasters","de-DE":"- Enthält 4 Untersetzer","en-US":"- Includes 4 coasters"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2864,
              "width": 2864,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Coaster-1.1.jpeg",
          },
        ],
        "key": "leatherCoaster01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "2499EUR",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2499,
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
            "key": "2499GBP",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2499,
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
            "key": "2499USD",
            "recurrencePolicyRef": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 2499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LCO-034",
      }
    `);
  });
});
