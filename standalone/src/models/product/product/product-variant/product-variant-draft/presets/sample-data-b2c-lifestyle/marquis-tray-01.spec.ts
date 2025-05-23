import type { TProductVariantDraft } from '../../../types';
import marquisTray01 from './marquis-tray-01';

describe(`with marquisTray01 preset`, () => {
  it(`should return a marquisTray01 preset`, () => {
    const marquisTray01Preset = marquisTray01().build<TProductVariantDraft>();
    expect(marquisTray01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Tablett",
              "en-GB": "- Includes 1 tray",
              "en-US": "- Includes 1 tray",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Goldene Rute:#DAA520",
              "en-GB": "Golden Rod:#DAA520",
              "en-US": "Golden Rod:#DAA520",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4784,
              "w": 5056,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Marquis_Tray-1.1.jpeg",
          },
        ],
        "key": "marquisTray01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MWT-01",
      }
    `);
  });

  it(`should return a marquisTray01 preset when built for graphql`, () => {
    const marquisTray01PresetGraphql =
      marquisTray01().buildGraphql<TProductVariantDraft>();
    expect(marquisTray01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 tray","de-DE":"- Enthält 1 Tablett","en-US":"- Includes 1 tray"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Golden Rod:#DAA520","de-DE":"Goldene Rute:#DAA520","en-US":"Golden Rod:#DAA520"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4784,
              "width": 5056,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Marquis_Tray-1.1.jpeg",
          },
        ],
        "key": "marquisTray01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "399EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
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
            "key": "399GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
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
            "key": "399USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "MWT-01",
      }
    `);
  });
});
