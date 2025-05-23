import type { TProductVariantDraft } from '../../../types';
import ariaRug01 from './aria-rug-01';

describe(`with ariaRug01 preset`, () => {
  it(`should return a ariaRug01 preset`, () => {
    const ariaRug01Preset = ariaRug01().build<TProductVariantDraft>();
    expect(ariaRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung
      - 5 Fuß x 7 Fuß",
              "en-GB": "- Dry clean only
      - 5ft x 7ft",
              "en-US": "- Dry clean only
      - 5ft x 7ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "Elfenbein:#FFFFF0",
              "en-GB": "Ivory:#FFFFF0",
              "en-US": "Ivory:#FFFFF0",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.4.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.3.jpeg",
          },
        ],
        "key": "ariaRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12499,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12499,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 12499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "AAR-34",
      }
    `);
  });

  it(`should return a ariaRug01 preset when built for graphql`, () => {
    const ariaRug01PresetGraphql =
      ariaRug01().buildGraphql<TProductVariantDraft>();
    expect(ariaRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only\\n- 5ft x 7ft","de-DE":"- Nur chemische Reinigung\\n- 5 Fuß x 7 Fuß","en-US":"- Dry clean only\\n- 5ft x 7ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"Ivory:#FFFFF0","de-DE":"Elfenbein:#FFFFF0","en-US":"Ivory:#FFFFF0"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.4.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.3.jpeg",
          },
        ],
        "key": "ariaRug01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "12499EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12499,
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
            "key": "12499GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12499,
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
            "key": "12499USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 12499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "AAR-34",
      }
    `);
  });
});
