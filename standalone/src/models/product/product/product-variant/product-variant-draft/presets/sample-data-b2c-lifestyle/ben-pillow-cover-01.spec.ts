import type { TProductVariantDraft } from '../../../types';
import benPillowCover01 from './ben-pillow-cover-01';

describe(`with benPillowCover01 preset`, () => {
  it(`should return a benPillowCover01 preset`, () => {
    const benPillowCover01Preset =
      benPillowCover01().build<TProductVariantDraft>();
    expect(benPillowCover01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Waschmaschinenfest
      - Bezug ist abnehmbar
      - Kissen nicht im Lieferumfang enthalten",
              "en-GB": "- Machine-washable
      - Cover is removable
      - Does not include pillow",
              "en-US": "- Machine-washable
      - Cover is removable
      - Does not include pillow",
            },
          },
          {
            "name": "search-color",
            "value": "yellow",
          },
          {
            "name": "color-label",
            "value": {
              "de-DE": "Bräunen",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color-code",
            "value": "#D2B48C",
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4160,
              "w": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ben_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "benPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1299,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "LBPC-09",
      }
    `);
  });

  it(`should return a benPillowCover01 preset when built for graphql`, () => {
    const benPillowCover01PresetGraphql =
      benPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(benPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine-washable\\n- Cover is removable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Bezug ist abnehmbar\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine-washable\\n- Cover is removable\\n- Does not include pillow"}",
          },
          {
            "name": "search-color",
            "value": ""yellow"",
          },
          {
            "name": "color-label",
            "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
          },
          {
            "name": "color-code",
            "value": ""#D2B48C"",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4160,
              "width": 6240,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ben_Pillow_Cover-1.1.jpeg",
          },
        ],
        "key": "benPillowCover01",
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": "1299EUR",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
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
            "key": "1299GBP",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
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
            "key": "1299USD",
            "recurrencePolicy": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 1299,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "LBPC-09",
      }
    `);
  });
});
