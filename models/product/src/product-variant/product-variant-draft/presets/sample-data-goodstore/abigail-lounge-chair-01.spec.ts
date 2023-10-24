import type { TProductVariantDraft } from '../../../types';
import abigailLoungeChair01 from './abigail-lounge-chair-01';

describe(`with abigailLoungeChair01 preset`, () => {
  it(`should return a abigailLoungeChair01 preset`, () => {
    const abigailLoungeChair01Preset =
      abigailLoungeChair01().build<TProductVariantDraft>();
    expect(abigailLoungeChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "lightpink",
              "en-GB": "lightpink",
              "en-US": "lightpink",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Soft Pink",
              "en-GB": "Soft Pink",
              "en-US": "Soft Pink",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Brass",
              "en-GB": "Brass",
              "en-US": "Brass",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "goldenrod",
              "en-GB": "goldenrod",
              "en-US": "goldenrod",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Wird mit passendem Kissen geliefert
      - Samtpolsterung
      - Wird zusammengebaut geliefert",
              "en-GB": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
              "en-US": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFC0CB",
              "label": {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 4000,
              "w": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Abigail_Lounge_Chair-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "EUR",
            },
          },
          {
            "channel": undefined,
            "country": "GB",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "GBP",
            },
          },
          {
            "channel": undefined,
            "country": "US",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 75000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "ALC-01",
      }
    `);
  });

  it(`should return a abigailLoungeChair01 preset when built for graphql`, () => {
    const abigailLoungeChair01PresetGraphql =
      abigailLoungeChair01().buildGraphql<TProductVariantDraft>();
    expect(abigailLoungeChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": "{"en-US":"lightpink","en-GB":"lightpink","de-DE":"lightpink"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-US":"Soft Pink","en-GB":"Soft Pink","de-DE":"Soft Pink"}",
          },
          {
            "name": "finishlabel",
            "value": "{"en-US":"Brass","en-GB":"Brass","de-DE":"Brass"}",
          },
          {
            "name": "finish",
            "value": "{"en-US":"goldenrod","en-GB":"goldenrod","de-DE":"goldenrod"}",
          },
          {
            "name": "productspec",
            "value": "{"en-US":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","de-DE":"- Wird mit passendem Kissen geliefert\\n- Samtpolsterung\\n- Wird zusammengebaut geliefert"}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 4000,
              "width": 5000,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Abigail_Lounge_Chair-1.1.jpeg",
          },
        ],
        "key": undefined,
        "prices": [
          {
            "channel": undefined,
            "country": "DE",
            "custom": undefined,
            "customerGroup": undefined,
            "discounted": undefined,
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centPrecision": {
                "centAmount": 75000,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "ALC-01",
      }
    `);
  });
});
