import type { TProductVariantDraft } from '../../../types';
import ivoryPlate01 from './ivory-plate-01';

describe(`with ivoryPlate01 preset`, () => {
  it(`should return a ivoryPlate01 preset`, () => {
    const ivoryPlate01Preset = ivoryPlate01().build<TProductVariantDraft>();
    expect(ivoryPlate01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Enthält 1 Teller",
              "en-GB": "- Includes 1 plate",
              "en-US": "- Includes 1 plate",
            },
          },
          {
            "name": "search-color",
            "value": "white",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Elfenbein",
              "en-GB": "Ivory",
              "en-US": "Ivory",
            },
          },
          {
            "name": "color-code",
            "value": "#FFFFF0",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4576,
              "w": 5088,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Plate-1.1.jpeg",
          },
        ],
        "key": "ivoryPlate01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1699,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1699,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1699,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ISP-01",
      }
    `);
  });

  it(`should return a ivoryPlate01 preset when built for graphql`, () => {
    const ivoryPlate01PresetGraphql =
      ivoryPlate01().buildGraphql<TProductVariantDraft>();
    expect(ivoryPlate01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Includes 1 plate","de-DE":"- Enthält 1 Teller","en-US":"- Includes 1 plate"}",
          },
          {
            "name": "search-color",
            "value": ""white"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Ivory","de-DE":"Elfenbein","en-US":"Ivory"}",
          },
          {
            "name": "color-code",
            "value": ""#FFFFF0"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4576,
              "width": 5088,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Plate-1.1.jpeg",
          },
        ],
        "key": "ivoryPlate01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1699EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1699,
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
            "key": "1699GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1699,
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
            "key": "1699USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1699,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ISP-01",
      }
    `);
  });
});
