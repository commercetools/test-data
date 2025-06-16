import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import orionDoubleBed01 from './orion-double-bed-01';

describe(`with orionDoubleBed01 preset`, () => {
  it(`should return a orionDoubleBed01 preset`, () => {
    const orionDoubleBed01Preset =
      orionDoubleBed01().build<TProductVariantDraft>();
    expect(orionDoubleBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Montage im Lieferumfang enthalten
      - Matratze nicht im Lieferumfang enthalten",
              "en-GB": "- Assembly included at delivery
      - Mattress not included",
              "en-US": "- Assembly included at delivery
      - Mattress not included",
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
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            ],
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Salbei",
              "en-GB": "Sage",
              "en-US": "Sage",
            },
          },
          {
            "name": "finish-label",
            "value": {
              "de-DE": "Silber",
              "en-GB": "Silver",
              "en-US": "Silver",
            },
          },
          {
            "name": "color-code",
            "value": "#BCB88A",
          },
          {
            "name": "finish-code",
            "value": "#C0C0C0",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3621,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Orion_Double_Bed-1.1.jpeg",
          },
        ],
        "key": "orionDoubleBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 159900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 159900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 159900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "OTB-07",
      }
    `);
  });

  it(`should return a orionDoubleBed01 preset when built for graphql`, () => {
    const orionDoubleBed01PresetGraphql =
      orionDoubleBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(orionDoubleBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Assembly included at delivery\\n- Mattress not included","de-DE":"- Montage im Lieferumfang enthalten\\n- Matratze nicht im Lieferumfang enthalten","en-US":"- Assembly included at delivery\\n- Mattress not included"}",
          },
          {
            "name": "search-color",
            "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
          },
          {
            "name": "search-finish",
            "value": "[{"en-US":"Silver","en-GB":"Silver","de-DE":"Silber"}]",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Sage","de-DE":"Salbei","en-US":"Sage"}",
          },
          {
            "name": "finish-label",
            "value": "{"en-GB":"Silver","de-DE":"Silber","en-US":"Silver"}",
          },
          {
            "name": "color-code",
            "value": ""#BCB88A"",
          },
          {
            "name": "finish-code",
            "value": ""#C0C0C0"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3621,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Orion_Double_Bed-1.1.jpeg",
          },
        ],
        "key": "orionDoubleBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "159900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 159900,
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
            "key": "159900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 159900,
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
            "key": "159900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "OTB-07",
      }
    `);
  });
});
