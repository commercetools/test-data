import type { TProductVariantDraft } from '../../../types';
import ivoryLoungeChair01 from './ivory-lounge-chair-01';

describe(`with ivoryLoungeChair01 preset`, () => {
  it(`should return a ivoryLoungeChair01 preset`, () => {
    const ivoryLoungeChair01Preset =
      ivoryLoungeChair01().build<TProductVariantDraft>();
    expect(ivoryLoungeChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung
      - Montage im Lieferumfang enthalten",
              "en-GB": "- Dry clean only
      - Assembly included in delivery",
              "en-US": "- Dry clean only
      - Assembly included in delivery",
            },
          },
          {
            "name": "search-color",
            "value": [
              "white",
            ],
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
              "h": 4400,
              "w": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "h": 4500,
              "w": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "h": 5000,
              "w": 3750,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.3.jpeg",
          },
        ],
        "key": "ivoryLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 29900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ILC-01",
      }
    `);
  });

  it(`should return a ivoryLoungeChair01 preset when built for graphql`, () => {
    const ivoryLoungeChair01PresetGraphql =
      ivoryLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(ivoryLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only\\n- Assembly included in delivery","de-DE":"- Nur chemische Reinigung\\n- Montage im Lieferumfang enthalten","en-US":"- Dry clean only\\n- Assembly included in delivery"}",
          },
          {
            "name": "search-color",
            "value": "["white"]",
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
              "height": 4400,
              "width": 5500,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.1.jpeg",
          },
          {
            "dimensions": {
              "height": 4500,
              "width": 3375,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.2.jpeg",
          },
          {
            "dimensions": {
              "height": 5000,
              "width": 3750,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.3.jpeg",
          },
        ],
        "key": "ivoryLoungeChair01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "29900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
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
            "key": "29900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
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
            "key": "29900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ILC-01",
      }
    `);
  });
});
