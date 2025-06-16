import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import ecruDoubleBed01 from './ecru-double-bed-01';

describe(`with ecruDoubleBed01 preset`, () => {
  it(`should return a ecruDoubleBed01 preset`, () => {
    const ecruDoubleBed01Preset =
      ecruDoubleBed01().build<TProductVariantDraft>();
    expect(ecruDoubleBed01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Mit gepolstertem Kopfteil
      - Montage inklusive",
              "en-GB": "- Comes with pillow-top headboard
      - Assembly included",
              "en-US": "- Comes with pillow-top headboard
      - Assembly included",
            },
          },
          {
            "name": "search-color",
            "value": "gray",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Gainsboro",
              "en-GB": "Gainsboro",
              "en-US": "Gainsboro",
            },
          },
          {
            "name": "color-code",
            "value": "#dcdcdc",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 2000,
              "w": 2000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ecru_Double_Bed-1.1.jpeg",
          },
        ],
        "key": "ecruDoubleBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "89900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 89900,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "89900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 89900,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "89900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 89900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "SQB-034",
      }
    `);
  });

  it(`should return a ecruDoubleBed01 preset when built for graphql`, () => {
    const ecruDoubleBed01PresetGraphql =
      ecruDoubleBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(ecruDoubleBed01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Comes with pillow-top headboard\\n- Assembly included","de-DE":"- Mit gepolstertem Kopfteil\\n- Montage inklusive","en-US":"- Comes with pillow-top headboard\\n- Assembly included"}",
          },
          {
            "name": "search-color",
            "value": ""gray"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Gainsboro","de-DE":"Gainsboro","en-US":"Gainsboro"}",
          },
          {
            "name": "color-code",
            "value": ""#dcdcdc"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 2000,
              "width": 2000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ecru_Double_Bed-1.1.jpeg",
          },
        ],
        "key": "ecruDoubleBed01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "89900EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 89900,
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
            "key": "89900GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 89900,
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
            "key": "89900USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 89900,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "SQB-034",
      }
    `);
  });
});
